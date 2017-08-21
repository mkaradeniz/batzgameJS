import React from 'react'
import PropTypes from 'prop-types'

import PopupMessage from 'Components/PopupMessage'

import * as styles from './styles'

const PopupMessages = props =>
  <div style={styles.container}>
    {props.messages.hardReset
      ? <PopupMessage
          color={props.color}
          content="Spielstand erfoglreich gelöscht und Spiel neugestartet."
        />
      : null}

    {props.messages.loaded
      ? <PopupMessage
          color={props.color}
          content="Spielstand erfolgreich geladen."
        />
      : null}

    {props.messages.restarted
      ? <PopupMessage
          color={props.color}
          content="Spiel erfolgreich neugestartet."
        />
      : null}

    {props.messages.saved
      ? <PopupMessage
          color={props.color}
          content="Spiel erfolgreich gespeichert."
        />
      : null}
  </div>

PopupMessages.propTypes = {
  color: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
}

export default PopupMessages
