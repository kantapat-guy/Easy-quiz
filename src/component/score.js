import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/dataQuestion'

const Score = () => {
  const {score, setScore, setAppState} =  useContext(DataContext)

  const restart = () => {
    setAppState('menu')
    setScore(0)
  }

  return (
    <div className='score'>
      <h1>Your Final Score</h1>
      <h1>{score} / {QuestionsData.length}</h1>
      <button onClick={restart}>Quiz Again</button>
    </div>
  )
}

export default Score
