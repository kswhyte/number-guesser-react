import React from 'react'

export const ResetButton = ({ resetGame, buttonToggle }) => {
  return (
    <button
      className="reset-button"
      onClick={resetGame}
      disabled={buttonToggle}
    >Reset Game
    </button>
  )
}
