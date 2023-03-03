import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const total = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positive = good / (good + neutral + bad);



  return (
    <div>
      <section>
        <h1>Give Feedback</h1>
        <div className='buttonContainer'>
          <button onClick={() => setGood(good + 1)} >Good</button>
          <button onClick={() => setNeutral(neutral + 1)} >Neutral</button>
          <button onClick={() => setBad(bad + 1)} >Bad</button>
        </div>
      </section>
      <section>
        <h1>Statistics</h1>
        <div className='statisticsContainer'>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>Total {total}</p>
          <p>Average {average}</p>
          <p>Positive {positive}%</p>
        </div>
      </section>
    </div>
  )
}

export default App