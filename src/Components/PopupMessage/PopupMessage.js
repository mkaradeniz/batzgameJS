import React from 'react'
import PropTypes from 'prop-types'

import { Icon, Message } from 'semantic-ui-react'

import * as styles from './styles'

const PopupMessage = props =>
  <Message color={props.color} style={styles.message} compact floating>
    <Icon name="check" />
    {props.content}
  </Message>

PopupMessage.propTypes = {
  color: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default PopupMessage
