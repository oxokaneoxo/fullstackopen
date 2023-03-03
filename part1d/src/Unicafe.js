// import { useState } from 'react'

// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>{props.text}</button>
//   )
// }

// const Feedback = (props) => {
//   return (
//     <div>
//       <h1>Give Feedback</h1>
//       <Button onClick={props.goodClick} text="Good" />
//       <Button onClick={props.neutralClick} text="Neutral" />
//       <Button onClick={props.badClick} text="Bad" />
//     </div>
//   )
// }

// const StatisticLine = ({ text, value, unit }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value} {unit}</td>
//     </tr>
//   )
// }

// const Statistics = ({ good, neutral, bad }) => {

//   const total = good + neutral + bad;
//   const average = (good - bad) / (good + neutral + bad);
//   const positive = good / (good + neutral + bad);

//   return (
//     <div>
//       {total === 0 ?
//         <p>No feedback given</p>
//         : (<>
//           <h1>Statistics</h1>
//           <table>
//             <tbody>
//               <StatisticLine text="Good" value={good} />
//               <StatisticLine text="Neutral" value={neutral} />
//               <StatisticLine text="Bad" value={bad} />
//               <StatisticLine text="Total" value={total} />
//               <StatisticLine text="Average" value={average} />
//               <StatisticLine text="Positive" value={positive} unit="%" />
//             </tbody>
//           </table>
//         </>)};
//     </div>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)


//   return (
//     <div>
//       <Feedback goodClick={() => setGood(good + 1)} neutralClick={() => setNeutral(neutral + 1)} badClick={() => setBad(bad + 1)} />
//       <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// export default Unicafe