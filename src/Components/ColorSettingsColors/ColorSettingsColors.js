import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'semantic-ui-react'

const iconColors = [
  'black',
  'brown',
  'grey',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'red',
  'pink',
  'orange',
  'yellow',
]

const ColorSettingsColors = props =>
  <div>
    {iconColors.map(color =>
      <Icon
        color={color}
        key={color}
        onMouseLeave={() => props.handleColorLeave(color)}
        onMouseEnter={() => props.handleColorEnter(color)}
        name={props.icon}
        onClick={() => props.handleColorPick(color)}
        size="large"
      />
    )}
  </div>

ColorSettingsColors.propTypes = {
  handleColorPick: PropTypes.func.isRequired,
  handleColorEnter: PropTypes.func.isRequired,
  handleColorLeave: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}

export default ColorSettingsColors
