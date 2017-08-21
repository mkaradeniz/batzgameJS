import React from 'react'
import PropTypes from 'prop-types'

import { Icon, Popup } from 'semantic-ui-react'

import ColorSettingsColors from 'Components/ColorSettingsColors'

import * as styles from './styles'

const ColorSettingsPopup = props =>
  <Popup
    content={
      <ColorSettingsColors
        handleColorPick={props.handleColorPick}
        handleColorEnter={props.handleColorEnter}
        handleColorLeave={props.handleColorLeave}
        icon={props.icon}
      />
    }
    on="click"
    onClose={props.toggle}
    onOpen={props.toggle}
    open={props.open}
    position="left center"
    size="mini"
    trigger={
      <div style={props.hovered ? styles.hovered : styles.notHovered}>
        <div style={styles.triggerContainer}>
          <div style={styles.icon}>
            <Icon color={props.color} name={props.icon} size="small" />
          </div>
        </div>
      </div>
    }
    basic
    flowing
    hideOnScroll
  />

ColorSettingsPopup.propTypes = {
  color: PropTypes.string.isRequired,
  handleColorEnter: PropTypes.func.isRequired,
  handleColorLeave: PropTypes.func.isRequired,
  handleColorPick: PropTypes.func.isRequired,
  hovered: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}

export default ColorSettingsPopup
