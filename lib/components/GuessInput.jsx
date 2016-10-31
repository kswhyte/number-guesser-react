import React from 'react'

export const GuessInput = ( {updateGuessValue, guessValue} ) => {
  return (
    <input
      className="guess-input-field"
      placeholder="Your best guess"
      value={guessValue}
      onChange={updateGuessValue}
    >
    </input>
  )
}
