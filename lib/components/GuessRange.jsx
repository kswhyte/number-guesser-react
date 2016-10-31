import React from 'react'

export const GuessRange = ({ minRange, maxRange, updateMinRange, updateMaxRange, updateRange, modifiedMin, modifiedMax }) => {
  return (
    <section>
      <div className="guess-range-setting">
        <input
          className="min-range-input"
          placeholder="Minimum..."
          value={minRange}
          onChange={updateMinRange}
        >
        </input>
        <input
          className="max-range-input"
          placeholder="Maximum..."
          value={maxRange}
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
      >Minimum: {modifiedMin} & Maximum: {modifiedMax}
      </p>
    </section>
  )
}
