import React, { Component } from 'react'

import { RecentGuess } from './RecentGuess'
import { GuessInput } from './GuessInput'
import { SubmitButton } from './SubmitButton'
import { ClearButton } from './ClearButton'
import { ResetButton } from './ResetButton'

export default class Application extends Component {
  constructor() {
    super()
    this.state = {
      guess: []
    }
  }

  render() {
    return (
      <div>
        <RecentGuess />
        <GuessInput />
        <div className="submit-clear-container">
          <SubmitButton />
          <ClearButton />
        </div>
        <ResetButton />
      </div>
    )
  }

}




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
