import { useState } from 'react'

const Feedback = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <div className='buttonContainer'>
        <button onClick={props.goodClick} >Good</button>
        <button onClick={props.neutralClick} >Neutral</button>
        <button onClick={props.badClick} >Bad</button>
      </div>
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  const average = (good - bad) / (good + neutral + bad);
  const positive = good / (good + neutral + bad);

  return (
    <div>
      {total === 0 ?
        <p>No feedback given</p>
        : (
          <>
            <h1>Statistics</h1>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>Total {total}</p>
            <p>Average {average}</p>
            <p>Positive {positive}%</p>
          </>
        )}

    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <Feedback goodClick={() => setGood(good + 1)} neutralClick={() => setNeutral(neutral + 1)} badClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App