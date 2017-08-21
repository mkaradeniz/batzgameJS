import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Container = WrappedComponent => {
  class ColorSettingsContainer extends Component {
    static propTypes = {
      backgroundColor: PropTypes.string.isRequired,
      handleBackgroundColorHover: PropTypes.func.isRequired,
      handleBackgroundColorPick: PropTypes.func.isRequired,
      handleTextColorHover: PropTypes.func.isRequired,
      handleTextColorPick: PropTypes.func.isRequired,
      textColor: PropTypes.string.isRequired,
    }

    state = {
      backgroundPopupOpen: false,
      containerHovered: false,
      textPopupOpen: false,
    }

    handleBackgroundColorEnter = color => {
      const { handleBackgroundColorHover } = this.props

      handleBackgroundColorHover(color)
    }

    handleBackgroundColorLeave = () => {
      const { handleBackgroundColorHover } = this.props

      handleBackgroundColorHover('')
    }

    handleBackgroundColorPick = color => {
      const { handleBackgroundColorPick } = this.props

      handleBackgroundColorPick(color)
      this.toggleBackgroundPopup()
    }

    handleTextColorEnter = color => {
      const { handleTextColorHover } = this.props

      handleTextColorHover(color)
    }

    handleTextColorLeave = () => {
      const { handleTextColorHover } = this.props

      handleTextColorHover('')
    }

    handleTextColorPick = color => {
      const { handleTextColorPick } = this.props

      handleTextColorPick(color)
      this.toggleTextPopup()
    }

    toggleBackgroundPopup = () => {
      this.setState(prevState => ({
        backgroundPopupOpen: !prevState.backgroundPopupOpen,
      }))
    }

    toggleContainerHover = () => {
      this.setState(prevState => ({
        containerHovered: !prevState.containerHovered,
      }))
    }

    toggleTextPopup = () => {
      this.setState(prevState => ({
        textPopupOpen: !prevState.textPopupOpen,
      }))
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          backgroundColor={this.props.backgroundColor}
          handleBackgroundColorEnter={this.handleBackgroundColorEnter}
          handleBackgroundColorLeave={this.handleBackgroundColorLeave}
          handleBackgroundColorPick={this.handleBackgroundColorPick}
          handleTextColorEnter={this.handleTextColorEnter}
          handleTextColorLeave={this.handleTextColorLeave}
          handleTextColorPick={this.handleTextColorPick}
          textColor={this.props.textColor}
          toggleBackgroundPopup={this.toggleBackgroundPopup}
          toggleContainerHover={this.toggleContainerHover}
          toggleTextPopup={this.toggleTextPopup}
        />
      )
    }
  }

  return ColorSettingsContainer
}

export default Container
