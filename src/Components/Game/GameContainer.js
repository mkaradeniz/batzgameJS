import React, { Component } from 'react'

import has from 'lodash/has'
import upperFirst from 'lodash/upperFirst'
import values from 'lodash/values'

import TypingAnimation from 'Components/TypingAnimation'

import * as constants from 'Global/constants'
import * as ls from 'Global/localStorage'
import actions from 'Global/actions'
import gameObjects from 'Global/objects'
import locations from 'Global/locations'
import { defaultState } from 'Global/defaultState'
import { getCSSColor } from './helpers'
import { getObjectId, getRandomDefaultGoMessage } from 'Global/helpers'

import { descriptions, defaultMessage } from 'Global/texts'

const Container = WrappedComponent => {
  class GameContainer extends Component {
    state = defaultState

    componentDidMount() {
      if (ls.savegameExists()) {
        this.loadGame().then(() => this.toggleMessageLoaded())
      }

      if (ls.settingsExists()) {
        this.loadSettings()
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      return true
    }

    // General

    // Overriding certain styles from the terminal component to enable color changes.
    buildInlineStylesheet = () => {
      const {
        backgroundColor,
        backgroundColorHover,
        textColor,
        textColorHover,
      } = this.state.settings

      const background = backgroundColorHover
        ? backgroundColorHover
        : backgroundColor
      const text = textColorHover ? textColorHover : textColor

      return `
        .terminal-container-main,
        .terminal-main-input,
        .terminal-main-input:focus {
          color: ${getCSSColor(text)} !important;
          background: ${getCSSColor(background)} !important;
          transition: all 0.3s ease-in;
      }`
    }

    deleteSavegame = () => {
      return new Promise(resolve => {
        ls.deleteSavegame()
        return resolve()
      })
    }

    hideMessage = name => {
      this.setState(prevState => ({
        ...prevState,
        messages: {
          ...prevState.messages,
          [name]: false,
        },
      }))
    }

    loadGame = () => {
      return new Promise(resolve => {
        this.setState(
          prevState => ({
            ...ls.loadGame(),
          }),
          resolve
        )
      })
    }

    loadSettings = () => {
      return new Promise(resolve => {
        this.setState(
          prevState => ({
            ...prevState,
            settings: ls.loadSettings(),
          }),
          resolve
        )
      })
    }

    restartGame = () => {
      return new Promise(resolve => {
        this.setState(
          prevState => ({
            ...defaultState,
          }),
          resolve
        )
      })
    }

    saveGame = () => {
      return new Promise(resolve => {
        ls.saveGame(this.state)

        return resolve()
      })
    }

    saveSettings = () => {
      return new Promise(resolve => {
        ls.saveSettings(this.state)

        return resolve()
      })
    }

    showMessage = name => {
      return new Promise(resolve => {
        this.setState(
          prevState => ({
            ...prevState,
            messages: {
              ...prevState.messages,
              [name]: true,
            },
          }),
          () => {
            return resolve()
          }
        )
      })
    }

    toggleMessageHardRestarted = () => {
      return new Promise(resolve => {
        this.showMessage('hardRestarted').then(() => {
          setTimeout(() => this.hideMessage('hardRestarted'), 2000)

          return resolve()
        })
      })
    }

    toggleMessageLoaded = () => {
      return new Promise(resolve => {
        this.showMessage('loaded').then(() => {
          setTimeout(() => this.hideMessage('loaded'), 2000)

          return resolve()
        })
      })
    }

    toggleMessageRestarted = () => {
      return new Promise(resolve => {
        this.showMessage('restarted').then(() => {
          setTimeout(() => this.hideMessage('restarted'), 2000)

          return resolve()
        })
      })
    }

    toggleMessageSaved = () => {
      return new Promise(resolve => {
        this.showMessage('saved').then(() => {
          setTimeout(() => this.hideMessage('saved'), 2000)

          return resolve()
        })
      })
    }

    setBackgroundColor = color => {
      this.setState(
        prevState => ({
          ...prevState,
          settings: {
            ...prevState.settings,
            backgroundColor: color,
          },
        }),
        this.saveSettings
      )
    }

    setBackgroundColorHover = color => {
      this.setState(prevState => ({
        ...prevState,
        settings: {
          ...prevState.settings,
          backgroundColorHover: color,
        },
      }))
    }

    setTextColor = color => {
      this.setState(
        prevState => ({
          ...prevState,
          settings: {
            ...prevState.settings,
            textColor: color,
          },
        }),
        this.saveSettings
      )
    }

    setTextColorHover = color => {
      this.setState(prevState => ({
        ...prevState,
        settings: {
          ...prevState.settings,
          textColorHover: color,
        },
      }))
    }

    startAnimation = () => {
      this.setState({ animationPlaying: true })
    }

    stopAnimation = () => {
      this.setState({ animationPlaying: false })
    }

    togglePromod = () => {
      this.setState(prevState => ({ ...prevState, promod: !prevState.promod }))
    }

    // Validators

    checkCondition = condition => {
      const { chapter, inventory, objects, place, scene } = this.state

      if (condition.object >= 0) {
        const { check, object } = condition
        switch (check) {
          case constants.CHECK_ACTIVE:
            if (objects[object]) {
              return objects[object].status === constants.STATUS_ACTIVE
            }

            return false

          case constants.CHECK_DESTROYED:
            if (objects[object]) {
              return objects[object].status === constants.STATUS_DESTROYED
            }

            return false

          case constants.CHECK_DISABLED:
            if (objects[object]) {
              return objects[object].status === constants.STATUS_DISABLED
            }
            return false

          case constants.CHECK_INVENTORY:
            return inventory.includes(object)

          case constants.CHECK_NOT_DESTROYED:
            if (objects[object]) {
              return objects[object].status !== constants.STATUS_DESTROYED
            }

            return false

          case constants.CHECK_NOT_IN_INVENTORY:
            return !inventory.includes(object)

          default:
            return false
        }
      } else if (condition.chapter) {
        return condition.chapter === chapter
      } else if (condition.place) {
        return condition.place === place
      } else if (condition.scene) {
        return condition.scene === scene
      }

      return false
    }

    checkConditions = conditions => {
      for (const condition of conditions) {
        if (!this.checkCondition(condition)) {
          return false
        }
      }

      return true
    }

    hasInInventory = object => {
      const { inventory } = this.state

      return inventory.includes(getObjectId(gameObjects, object))
    }

    isActiveAndAround = object => {
      const { chapter, objects, place, scene } = this.state
      const foundObject = objects[getObjectId(gameObjects, object)]

      if (foundObject) {
        const {
          chapter: foundObjectChapter,
          place: foundObjectPlace,
          scene: foundObjectScene,
          status: foundObjectStatus,
        } = foundObject

        return (
          foundObjectChapter === chapter &&
          foundObjectPlace === place &&
          foundObjectScene === scene &&
          foundObjectStatus === constants.STATUS_ACTIVE
        )
      }

      return false
    }

    // Getters

    animateResponse = text => {
      const { promod } = this.state

      if (promod) {
        if (typeof text === 'string') {
          return text
        } else {
          return text.join('\n')
        }
      }

      return (
        <TypingAnimation
          onDone={this.stopAnimation}
          onStart={this.startAnimation}
          skip={false}
          text={text}
        />
      )
    }

    getDefaultMessage = () => {
      return this.animateResponse(defaultMessage)
    }

    getSceneDescription = () => {
      const { chapter, place, scene } = this.state

      return this.animateResponse(locations[chapter][place][scene].description)
    }

    // Verbs

    changeObject = changeObject => {
      const { change, object } = changeObject

      const activateObject = () => {
        this.setState(prevState => ({
          ...prevState,
          objects: {
            ...prevState.objects,
            [object]: {
              ...prevState.objects[object],
              status: constants.STATUS_ACTIVE,
            },
          },
        }))
      }

      const addObjectToInventory = () => {
        this.setState(prevState => ({
          ...prevState,
          inventory: [...prevState.inventory, object],
        }))
      }

      const deactivateObject = () => {
        this.setState(prevState => ({
          ...prevState,
          objects: {
            ...prevState.objects,
            [object]: {
              ...prevState.objects[object],
              status: constants.STATUS_DISABLED,
            },
          },
        }))
      }

      const destroyObject = () => {
        this.setState(prevState => ({
          ...prevState,
          objects: {
            ...prevState.objects,
            [object]: {
              ...prevState.objects[object],
              status: constants.STATUS_DESTROYED,
            },
          },
        }))
      }

      const removeObjectFromInventory = () => {
        this.setState(prevState => ({
          ...prevState,
          inventory: prevState.inventory.filter(i => i !== object),
        }))
      }

      switch (change) {
        case constants.CHANGE_ACTIVATE:
          activateObject()
          break

        case constants.CHANGE_DEACTIVATE:
          deactivateObject()
          break

        case constants.CHANGE_INVENTORY_ADD:
          activateObject()
          addObjectToInventory()
          break

        case constants.CHANGE_INVENOTRY_REMOVE:
          removeObjectFromInventory()
          break

        case constants.CHANGE_DESTROY:
          destroyObject()
          removeObjectFromInventory()
          break

        default:
          break
      }
    }

    changePlace = change => {
      const setPlace = place => {
        this.setState(prevState => ({
          ...prevState,
          place,
        }))
      }

      setPlace(change)
    }

    changeScene = change => {
      const setScene = scene => {
        this.setState(prevState => ({
          ...prevState,
          scene,
        }))
      }

      setScene(change)
    }

    go = (target, print) => {
      const actionsArray = actions['go'][getObjectId(gameObjects, target)]

      if (actionsArray) {
        for (const action of actionsArray) {
          if (this.checkConditions(action.conditions)) {
            this.makeChanges(action.changes)

            return this.animateResponse(action.description)
          }
        }
      }

      return getRandomDefaultGoMessage(target)
    }

    inspect = object => {
      const { objects } = this.state

      const foundObject = values(objects).find(
        i => i.name.toLowerCase() === object.toLowerCase()
      )

      if (foundObject) {
        const { description } = foundObject

        if (this.hasInInventory(object)) {
          return this.animateResponse(description)
        } else if (this.isActiveAndAround(object)) {
          return this.animateResponse(description)
        }
      }

      return this.animateResponse(['Kenn ich nicht.'])
    }

    inventory = () => {
      const { inventory, objects } = this.state

      return inventory
        .map(i => upperFirst(objects[i].name))
        .sort((a, b) => a.localeCompare(b))
        .join('\n')
    }

    makeChanges = changes => {
      changes.forEach(c => {
        if (c.object) {
          this.changeObject(c)
        } else if (c.scene) {
          this.changeScene(c.scene)
        } else if (c.place) {
          this.changePlace(c.place)
        }
      })
    }

    startGame = () => {
      this.setState({ gameStarted: true })

      return this.animateResponse(locations.introduction)
    }

    take = target => {
      const actionsArray = actions['take'][getObjectId(gameObjects, target)]

      if (actionsArray) {
        for (const action of actionsArray) {
          if (this.checkConditions(action.conditions)) {
            this.makeChanges(action.changes)

            return this.animateResponse(action.description)
          }
        }
      }

      return this.animateResponse(['Das kann ich nicht.'])
    }

    thumpUp = () => {
      const actionsArray = actions['thumbUp']

      if (actionsArray) {
        for (const action of actionsArray) {
          if (this.checkConditions(action.conditions)) {
            this.makeChanges(action.changes)

            return this.animateResponse(action.description)
          }
        }
      }

      return this.animateResponse([
        'Ich halte den Daumen raus… nichts geschieht.',
      ])
    }

    use = target => {
      const actionsArray = actions['use'][getObjectId(gameObjects, target)]

      if (actionsArray) {
        for (const action of actionsArray) {
          if (this.checkConditions(action.conditions)) {
            this.makeChanges(action.changes)

            return this.animateResponse(action.description)
          }
        }
      }

      return this.animateResponse(['Das kann ich nicht.'])
    }

    useWith = (target1, target2) => {
      const target1Id = getObjectId(gameObjects, target1)
      const target2Id = getObjectId(gameObjects, target2)

      const source = target1Id > target2Id ? target2Id : target1Id
      const target = target1Id > target2Id ? target1Id : target2Id

      if (has(actions, `useWith.${source}.${target}`)) {
        const actionsArray = actions['useWith'][source][target]

        if (actionsArray) {
          for (const action of actionsArray) {
            if (this.checkConditions(action.conditions)) {
              this.makeChanges(action.changes)

              return this.animateResponse(action.description)
            }
          }
        }
      }

      return this.animateResponse(['Das funktioniert so nicht.'])
    }

    // Commands

    commandGo = (args, print) => {
      const { gameStarted } = this.state
      const target = args._[0]

      if (gameStarted) {
        if (target === undefined) {
          print(this.animateResponse([descriptions.gehe]))
        } else {
          print(this.go(target))
        }
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandHardRestart = (args, print, runCommand) => {
      this.deleteSavegame()
        .then(() => this.restartGame())
        .then(() => this.toggleMessageHardRestarted())
        .then(() => runCommand('clear'))
    }

    commandHelp = (args, print, runCommand) => {
      runCommand('help')
    }

    commandInspect = (args, print) => {
      const { gameStarted } = this.state
      const target = args._[0]

      if (gameStarted) {
        if (target === undefined) {
          print(this.animateResponse([descriptions.untersuche]))
        } else {
          print(this.inspect(target))
        }
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandInventory = (args, print) => {
      const { gameStarted } = this.state

      if (gameStarted) {
        print(this.inventory())
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandLoad = (args, print, runCommand) => {
      if (ls.savegameExists()) {
        this.loadGame()
          .then(() => this.toggleMessageLoaded())
          .then(() => runCommand('clear'))
      } else {
        print(
          'Du hast momentan kein gespeichertes Spiel. Schreibe "speichern" um deinen aktuellen stand zu speichern.'
        )
      }
    }

    commandLookAround = (args, print) => {
      const { gameStarted } = this.state

      if (gameStarted) {
        print(this.getSceneDescription())
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandPromod = (args, print) => {
      const { promod } = this.state

      if (promod) {
        print('Promod disabled. 🙅🏼')
      } else {
        print('Promod enabled. 🙆🏼')
      }

      this.togglePromod()
    }

    commandRestart = (args, print, runCommand) => {
      this.restartGame()
        .then(() => this.toggleMessageSaved())
        .then(() => runCommand('clear'))
    }

    commandStart = (args, print) => {
      const { gameStarted } = this.state

      if (gameStarted) {
        print(this.animateResponse(['Du spielst doch schon.']))
      } else {
        print(this.startGame())
      }
    }

    commandSave = (args, print, runCommand) => {
      this.saveGame().then(() => this.toggleMessageSaved())
    }

    commandTake = (args, print) => {
      const { gameStarted } = this.state
      const target = args._[0]

      if (gameStarted) {
        if (target === undefined) {
          print(this.animateResponse([descriptions.nehme]))
        } else {
          print(this.take(target))
        }
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandThumbUp = (args, print) => {
      const { gameStarted } = this.state

      if (gameStarted) {
        print(this.thumpUp())
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    commandUse = (args, print) => {
      const { gameStarted } = this.state
      const target1 = args._[0]
      const target2 = args._[2]

      if (gameStarted) {
        if (target1 === undefined) {
          print(this.animateResponse([descriptions.benutze]))
        } else if (args._[1] === 'mit' && target2 !== undefined) {
          print(this.useWith(target1, target2))
        } else {
          print(this.use(target1))
        }
      } else {
        print(this.animateResponse(['Starte zuerst das Spiel.']))
      }
    }

    render() {
      return (
        <WrappedComponent
          backgroundColor={this.state.settings.backgroundColor}
          commandGo={this.commandGo}
          commandHardRestart={this.commandHardRestart}
          commandHelp={this.commandHelp}
          commandInspect={this.commandInspect}
          commandInventory={this.commandInventory}
          commandLoad={this.commandLoad}
          commandLookAround={this.commandLookAround}
          commandPromod={this.commandPromod}
          commandRestart={this.commandRestart}
          commandSave={this.commandSave}
          commandStart={this.commandStart}
          commandTake={this.commandTake}
          commandThumbUp={this.commandThumbUp}
          commandUse={this.commandUse}
          defaultMessage={this.getDefaultMessage()}
          messages={this.state.messages}
          setBackgroundColor={this.setBackgroundColor}
          setBackgroundColorHover={this.setBackgroundColorHover}
          setTextColor={this.setTextColor}
          setTextColorHover={this.setTextColorHover}
          stylesheet={this.buildInlineStylesheet()}
          textColor={this.state.settings.textColor}
        />
      )
    }
  }
  return GameContainer
}

export default Container
