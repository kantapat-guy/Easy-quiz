import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/dataQuestion'

const Quiz = () => {
 console.log(QuestionsData)
 const[current, setCurrent] = useState(0)
 const [selected, setSelected] = useState("")

 const {score, setScore, setAppState} = useContext(DataContext)

 const checkAns = () => {
    if (selected !== "") {
        if (selected === QuestionsData[current].answer) {
            setScore(score+1)
            nextQuestion()
        } else {
            nextQuestion()
        }
    }
 }

 const nextQuestion = () => {
    if (current === QuestionsData.length-1) {
        setAppState('score')
    }

    setCurrent(current + 1)
 }

 useEffect(() => {
    checkAns()
    setSelected("")
 }, [selected])

  return (
    <div className='quiz'>
      <h1>{QuestionsData[current].question}</h1>
      <div className='choice' >
        <button onClick={() => setSelected("A")}>{QuestionsData[current].A}</button>
        <button onClick={() => setSelected("B")}>{QuestionsData[current].B}</button>
        <button onClick={() => setSelected("C")}>{QuestionsData[current].C}</button>
        <button onClick={() => setSelected("D")}>{QuestionsData[current].D}</button>
      </div>
      <p>{`${current+1} / ${QuestionsData.length}`}</p>
    </div>
  )
}

export default Quiz
