import React,{useState} from 'react'
import './Todoform.css'

export default function Todoform(props) {
  const[task,settask]=useState('')
  function inuputchangehandler(event){
    
    settask(event.target.value)
    

  }
  function submithandler(event){
    event.preventDefault()

    const tasks={
      task:task,
      id:Math.random().toString()

    }
    
props.task(tasks)

    settask('')
  }


  return (
    <>
    <form onSubmit={submithandler}>
       <div className='container'>
      <div className='todo-title'>TO-DO LIST</div>
       <input type='text' className='input'  onChange={inuputchangehandler} value={task} maxLength={100}/><button type='submit' className='btn'>+</button> 
    </div>
    </form>
    <div className='list-title'> YOUR TODOS:</div>
   
    </>
    
  )
}

