import React from 'react'

export const ClearButton = ({ clearGuessInput, buttonToggle }) => {
  return (
    <button
      className="clear-button"
      onClick={clearGuessInput}
      disabled={buttonToggle}
    >Clear
    </button>
  )
}
