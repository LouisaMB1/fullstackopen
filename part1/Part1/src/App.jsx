import { useState } from "react"

const Title = () => <h2>give feedback</h2>

const StatisticLine=({ text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const average = (good - bad)/ total
  const positive = (good / total)  * 100

  if (total === 0){
    return <p>No feedback given</p>
  }
  return (
    <div>
      <h2>statistics</h2>
      <table>
      <StatisticLine text='good' value={good}/>
      <StatisticLine text='neutral' value={neutral}/>
      <StatisticLine text='bad' value={bad}/>
      <StatisticLine text='all' value={total}/>
      <StatisticLine text='average' value={average.toFixed(1)}/>
      <StatisticLine text='positive' value={positive.toFixed(1) + '%'}/>
      </table>
    </div>
  )
}



 
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

   const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
   }

   const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
   }

  return (
    <div>
      <Title />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

export default App