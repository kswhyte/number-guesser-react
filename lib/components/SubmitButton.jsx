import React from 'react'

export const SubmitButton = ({ submitGuess, buttonToggle }) => {
  return (
    <button
      className="submit-button"
      type="submit"
      onClick={submitGuess}
      disabled={buttonToggle}
    >Guess
    </button>
  )
}
