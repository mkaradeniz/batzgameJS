import omit from 'lodash/omit'

import { defaultState, defaultSettings } from 'Global/defaultState'
import { LS_KEY_GAME, LS_KEY_SETTINGS } from 'Global/constants'

export const deleteSavegame = () => {
  localStorage.removeItem(LS_KEY_GAME)
}

export const deleteSettings = () => {
  localStorage.removeItem(LS_KEY_SETTINGS)
}

export const loadGame = () => {
  const savedGame = localStorage.getItem(LS_KEY_GAME)

  if (savedGame === null) {
    return omit(defaultState, 'settings')
  } else {
    return JSON.parse(savedGame)
  }
}

export const loadSettings = () => {
  const savedSettings = localStorage.getItem(LS_KEY_SETTINGS)

  if (savedSettings === null) {
    return defaultSettings
  } else {
    return JSON.parse(savedSettings)
  }
}

export const saveGame = state => {
  localStorage.setItem(LS_KEY_GAME, JSON.stringify(omit(state, 'settings')))
}

export const saveSettings = ({ settings }) => {
  localStorage.setItem(LS_KEY_SETTINGS, JSON.stringify(settings))
}

export const savegameExists = () => {
  return !!localStorage.getItem(LS_KEY_GAME)
}

export const settingsExists = () => {
  return !!localStorage.getItem(LS_KEY_SETTINGS)
}
