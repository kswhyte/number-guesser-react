import React from 'react'

export const RecentGuess = ({ guessValue, feedbackMsg }) => {
  return (
    <section className="recent-guess-section">
      <p>Your last guess was...</p>
      <h1>~ {guessValue} ~</h1>
      <p>{feedbackMsg}</p>
    </section>
  )
}
