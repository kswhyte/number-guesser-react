import React from 'react'

export const RecentGuess = ({ lastGuess, feedbackMsg }) => {
  return (
    <section className="recent-guess-section">
      <p>Your last guess was...</p>
      <h1>~ {lastGuess} ~</h1>
      <p>{feedbackMsg}</p>
    </section>
  )
}
