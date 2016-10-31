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
      targetNumber: this.randomizeNumber(),
      guessValue: '',
      feedbackMsg: 'How lucky do you feel?',
      minRange: 0,
      maxRange: 100
      // modifiedMin: '',
      // modifiedMax: ''
    }
  }
  // this.state.modifiedMin ||
  // this.state.modifiedMax ||

  randomizeNumber() {
    // console.log(parseInt(this.state.minRange))
    // console.log(parseInt(this.state.maxRange))
    let newTarget = Math.floor(Math.random()
    * (100 - 0)) + 0
    // * (this.state.maxRange - this.state.minRange)) + this.state.minRange
    return newTarget
  }

  submitGuess() {
    this.isGuessANumber()
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
    if (parseInt(this.state.guessValue) > this.state.maxRange) {
      this.setState({ feedbackMsg: "Your number is ABOVE the accepted range." })
      this.clearGuessInput()
    } else {
      this.compareToMin()
    }
  }
  compareToMin() {
    if (parseInt(this.state.guessValue) < this.state.minRange) {
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
    if (parseInt(this.state.guessValue) === this.state.targetNumber) {
      this.setState({ feedbackMsg: "YOU WIN!!" })
      this.clearGuessInput()
      this.setState({ targetNumber: this.randomizeNumber() })
    }
  }

  updateGuessValue(e) {
    this.setState({guessValue: e.target.value})
  }
  clearGuessInput() {
    this.setState({ guessValue: '' })
  }
  resetGame() {
    this.setState({ guessValue: '' })
    this.setState({ minRange: 0 })
    this.setState({ minRange: 100 })
    this.setState({ feedbackMsg: 'How lucky do you feel?' })
  }
  updateMinRange(e) {
    this.setState({ minRange: e.target.value })
  }
  updateMaxRange(e) {
    this.setState({ maxRange: e.target.value })
  }
  updateRange() {

  }

  render() {
    let buttonToggle = false
    if (!this.state.guessValue) {
      buttonToggle = true
    }
    return (
      <div>
        <RecentGuess
          guessValue={this.state.guessValue}
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
          buttonToggle={buttonToggle}
        />
        <GuessRange
          minRange={this.state.minRange}
          updateMinRange={this.updateMinRange.bind(this)}
          maxRange={this.state.maxRange}
          updateMaxRange={this.updateMaxRange.bind(this)}
          updateRange={this.updateRange.bind(this)}
        />
      </div>
    )
  }

}
{/* <GuessRange /> */}




//
// The application should have the following user interface elements:
//
// An input field for guessing the number
// A button for submitting a guess
// A button for clearing the input field
// A button that resets the game to its initial state
// An element that displays the users most recent guess
// An element that displays a message to user
// If their guess is too high, it should display: “Sorry, that guess is too high. Try a lower number.”
// If their guess is too low, it should display: “Sorry, that guess is too low. Try a higher number.”
