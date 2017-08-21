import values from 'lodash/values'

import * as constants from 'Global/constants'
import gameObjects from 'Global/objects'

export const defaultSettings = {
  backgroundColor: 'black',
  backgroundColorHover: '',
  textColor: 'green',
  textColorHover: '',
}

export const defaultState = {
  animationPlaying: false,
  chapter: 1,
  gameStarted: constants.DEVELOPMENT ? true : false,
  inventory: values(gameObjects).filter(i => i.default).map(i => i.id),
  messages: {
    hardRestarted: false,
    loaded: false,
    restarted: false,
    saved: false,
  },
  objects: gameObjects,
  place: 'laboe',
  promod: constants.DEVELOPMENT ? true : false,
  scene: 'naziraum',
  settings: defaultSettings,
}
