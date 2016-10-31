import React from 'react'

export const ResetButton = ({ resetGame, resetButtonToggle }) => {
  return (
    <button
      className="reset-button"
      onClick={resetGame}
      disabled={resetButtonToggle}
    >Reset Game
    </button>
  )
}
