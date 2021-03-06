import React from 'react'

export const GuessRange = ({ minRange, maxRange, updateMinRange, updateMaxRange, updateRange, modifiedMin, modifiedMax }) => {
  return (
    <section>
      <div className="guess-range-setting">
        <input
          className="min-range-input"
          placeholder="Minimum..."
          onChange={updateMinRange}
        >
        </input>
        <input
          className="max-range-input"
          placeholder="Maximum..."
          onChange={updateMaxRange}
        >
        </input>
      </div>
      <button
        className="submit-range-button"
        type="submit"
        onClick={updateRange}
      >Submit Range
      </button>
      <p
        className="min-max-settings"
      >Minimum: <span>{modifiedMin} </span>
      & Maximum: <span>{modifiedMax}</span>
      </p>
    </section>
  )
}
