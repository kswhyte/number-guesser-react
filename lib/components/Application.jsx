import React, { Component } from 'react'

import { RecentGuess } from './RecentGuess'
import { GuessInput } from './GuessInput'
import { SubmitButton } from './SubmitButton'
import { ClearButton } from './ClearButton'
import { ResetButton } from './ResetButton'
import { GuessRange } from './GuessRange'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      targetNumber: '',
      guessValue: '',
      lastGuess: '',
      feedbackMsg: 'How lucky do you feel?',
      minRange: '',
      maxRange: '',
      modifiedMin: 0,
      modifiedMax: 100
    }
  }
  componentDidMount() {
    this.randomizeNumber()
  }
  randomizeNumber() {
    const { minRange, maxRange, modifiedMin, modifiedMax, rangeDefined } = this.state
      this.setState({ targetNumber: Math.floor(Math.random()
        * (modifiedMax - modifiedMin)) + modifiedMin })
  }

  submitGuess() {
    this.isGuessANumber()
    this.setState({ lastGuess: this.state.guessValue })
  }
  isGuessANumber() {
    if (isNaN(parseInt(this.state.guessValue))) {
      this.setState({ feedbackMsg: "Oops, you need to choose a NUMBER." })
      this.clearGuessInput()
    } else {
      this.compareToMax()
    }
  }
  compareToMax() {
    if (parseInt(this.state.guessValue) > this.state.modifiedMax) {
      this.setState({ feedbackMsg: "Your number is ABOVE the accepted range." })
      this.clearGuessInput()
    } else {
      this.compareToMin()
    }
  }
  compareToMin() {
    if (parseInt(this.state.guessValue) < this.state.modifiedMin) {
      this.setState({ feedbackMsg: "Your number is BELOW the accepted range." })
      this.clearGuessInput()
    } else {
      this.isGuessTooHigh()
    }
  }
  isGuessTooHigh() {
    if (parseInt(this.state.guessValue) > this.state.targetNumber) {
      this.setState({ feedbackMsg: "Your guess is too HIGH" })
      this.clearGuessInput()
    } else {
      this.isGuessTooLow()
    }
  }
  isGuessTooLow() {
    if (parseInt(this.state.guessValue) < this.state.targetNumber) {
      this.setState({ feedbackMsg: "Your guess is too LOW" })
      this.clearGuessInput()
    } else {
      this.validateAWin()
    }
  }
  validateAWin() {
    let newMin = this.state.modifiedMin - 10
    let newMax = this.state.modifiedMax + 10
    if (parseInt(this.state.guessValue) === this.state.targetNumber) {
      this.setState({
        feedbackMsg: "~ YOU WIN!! ~",
        minRange: '',
        maxRange: '',
        modifiedMin: newMin,
        modifiedMax: newMax
      })
    this.clearGuessInput()
    window.setTimeout(this.randomizeNumber(), 1000)
    }
  }

  updateGuessValue(e) {
    this.setState({ guessValue: e.target.value })
  }
  clearGuessInput() {
    this.setState({ guessValue: '' })
  }
  resetGame() {
    this.setState({
      guessValue: '',
      minRange: '',
      maxRange: '',
      modifiedMin: 0,
      modifiedMax: 100,
      feedbackMsg: 'How lucky do you feel?',
      lastGuess: ''
    }, () => {
      this.randomizeNumber()
    })
  }
  updateMinRange(e) {
    if (!isNaN(e.target.value)) {
    this.setState({ minRange: parseInt(e.target.value) })
    }
  }
  updateMaxRange(e) {
    if (!isNaN(e.target.value)) {
    this.setState({ maxRange: parseInt(e.target.value) })
    }
  }
  updateRange() {
    this.setState({
      modifiedMin: this.state.minRange,
      modifiedMax: this.state.maxRange
    }, () => {
      this.randomizeNumber()
    })
  }

  render() {
    let buttonToggle = false
    if (!this.state.guessValue) {
      buttonToggle = true
    }
    let resetButtonToggle = true
    if (this.state.lastGuess || this.state.guessValue
      || this.state.minRange || this.state.maxRange) {
      resetButtonToggle = false
    }
    return (
      <div>
        <p className="title">Number <span>Guesser</span></p>
        <RecentGuess
          lastGuess={this.state.lastGuess}
          feedbackMsg={this.state.feedbackMsg}
        />
        <GuessInput
          updateGuessValue={this.updateGuessValue.bind(this)}
          guessValue={this.state.guessValue}
        />
        <div className="submit-clear-container">
          <SubmitButton
            submitGuess={this.submitGuess.bind(this)}
            buttonToggle={buttonToggle}
          />
          <ClearButton
            clearGuessInput={this.clearGuessInput.bind(this)}
            buttonToggle={buttonToggle}
          />
        </div>
        <ResetButton
          resetGame={this.resetGame.bind(this)}
          resetButtonToggle={resetButtonToggle}
        />
        <GuessRange
          minRange={this.state.minRange}
          maxRange={this.state.maxRange}
          updateMinRange={this.updateMinRange.bind(this)}
          updateMaxRange={this.updateMaxRange.bind(this)}
          updateRange={this.updateRange.bind(this)}
          modifiedMin={this.state.modifiedMin}
          modifiedMax={this.state.modifiedMax}
        />
      </div>
    )
  }

}
