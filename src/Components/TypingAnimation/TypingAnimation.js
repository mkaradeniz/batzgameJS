import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Typist from 'react-typist'

class TypingAnimation extends Component {
  static propTypes = {
    onDone: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string.isRequired),
      PropTypes.string,
    ]).isRequired,
  }

  componentDidMount() {
    const { onStart } = this.props

    onStart()
  }

  renderText = text => {
    if (typeof text === 'string') {
      return (
        <span>
          {text}
          <br />
        </span>
      )
    } else {
      return text.map((t, i) =>
        <span key={t}>
          {t}
          <br />
        </span>
      )
    }
  }

  render() {
    const { onDone, text } = this.props

    return (
      <Typist
        avgTypingDelay={20}
        cursor={{ element: '▍', hideWhenDone: true, hideWhenDoneDelay: 500 }}
        onTypingDone={onDone}
        stdTypingDelay={10}
      >
        {this.renderText(text)}
      </Typist>
    )
  }
}

export default TypingAnimation
