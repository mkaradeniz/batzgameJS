import React from 'react'
import PropTypes from 'prop-types'

import InlineCss from 'react-inline-css'
import Terminal from 'terminal-in-react'

import Container from './GameContainer'

import ColorSettings from 'Components/ColorSettings'
import PopupMessages from 'Components/PopupMessages'

import { descriptions } from 'Global/texts'

import * as styles from './styles'

const Game = props =>
  <div style={styles.container}>
    <InlineCss stylesheet={props.stylesheet} />

    <PopupMessages color={props.textColor} messages={props.messages} />

    <ColorSettings
      backgroundColor={props.backgroundColor}
      handleBackgroundColorHover={props.setBackgroundColorHover}
      handleBackgroundColorPick={props.setBackgroundColor}
      handleTextColorHover={props.setTextColorHover}
      handleTextColorPick={props.setTextColor}
      textColor={props.textColor}
    />

    <Terminal
      allowTabs={false}
      commandPassThrough={() => props.defaultMessage}
      commands={{
        benutze: { method: props.commandUse },
        daumenraus: { method: props.commandThumbUp },
        gehe: { method: props.commandGo },
        github: { method: props.commandGithub },
        hardrestart: { method: props.commandHardRestart },
        hilfe: { method: props.commandHelp },
        inventar: { method: props.commandInventory },
        laden: { method: props.commandLoad },
        nehme: { method: props.commandTake },
        neustarten: { method: props.commandRestart },
        promod: { method: props.commandPromod },
        speichern: { method: props.commandSave },
        starten: { method: props.commandStart },
        umsehen: { method: props.commandLookAround },
        untersuche: { method: props.commandInspect },
      }}
      descriptions={descriptions}
      promptSymbol="👨🏼"
      startState="maximised"
      style={styles.terminal}
      watchConsoleLogging={false}
      hideTopBar
    />
  </div>

Game.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  commandGithub: PropTypes.func.isRequired,
  commandGo: PropTypes.func.isRequired,
  commandHardRestart: PropTypes.func.isRequired,
  commandHelp: PropTypes.func.isRequired,
  commandInspect: PropTypes.func.isRequired,
  commandInventory: PropTypes.func.isRequired,
  commandLoad: PropTypes.func.isRequired,
  commandLookAround: PropTypes.func.isRequired,
  commandRestart: PropTypes.func.isRequired,
  commandSave: PropTypes.func.isRequired,
  commandStart: PropTypes.func.isRequired,
  commandTake: PropTypes.func.isRequired,
  commandThumbUp: PropTypes.func.isRequired,
  commandUse: PropTypes.func.isRequired,
  defaultMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
    .isRequired,
  messages: PropTypes.object.isRequired,
  setBackgroundColor: PropTypes.func.isRequired,
  setBackgroundColorHover: PropTypes.func.isRequired,
  setTextColor: PropTypes.func.isRequired,
  setTextColorHover: PropTypes.func.isRequired,
  stylesheet: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
}

export default Container(Game)
