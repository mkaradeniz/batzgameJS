import React from 'react'
import PropTypes from 'prop-types'

import Container from './ColorSettingsContainer'

import ColorSettingsPopup from 'Components/ColorSettingsPopup'

import * as styles from './styles'

const ColorSettings = props =>
  <div style={styles.buttons}>
    <div
      onMouseEnter={props.toggleContainerHover}
      onMouseLeave={props.toggleContainerHover}
    >
      <ColorSettingsPopup
        color={props.backgroundColor}
        handleColorEnter={props.handleBackgroundColorEnter}
        handleColorLeave={props.handleBackgroundColorLeave}
        handleColorPick={props.handleBackgroundColorPick}
        hovered={props.backgroundPopupOpen || props.containerHovered}
        icon="square"
        open={props.backgroundPopupOpen}
        toggle={props.toggleBackgroundPopup}
      />

      <ColorSettingsPopup
        color={props.textColor}
        handleColorEnter={props.handleTextColorEnter}
        handleColorLeave={props.handleTextColorLeave}
        handleColorPick={props.handleTextColorPick}
        hovered={props.containerHovered || props.textPopupOpen}
        icon="terminal"
        open={props.textPopupOpen}
        toggle={props.toggleTextPopup}
      />
    </div>
  </div>

ColorSettings.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  backgroundPopupOpen: PropTypes.bool.isRequired,
  containerHovered: PropTypes.bool.isRequired,
  handleBackgroundColorEnter: PropTypes.func.isRequired,
  handleBackgroundColorLeave: PropTypes.func.isRequired,
  handleBackgroundColorPick: PropTypes.func.isRequired,
  handleTextColorEnter: PropTypes.func.isRequired,
  handleTextColorLeave: PropTypes.func.isRequired,
  handleTextColorPick: PropTypes.func.isRequired,
  textColor: PropTypes.string.isRequired,
  textPopupOpen: PropTypes.bool.isRequired,
  toggleBackgroundPopup: PropTypes.func.isRequired,
  toggleContainerHover: PropTypes.func.isRequired,
  toggleTextPopup: PropTypes.func.isRequired,
}

export default Container(ColorSettings)
