import { useState } from 'react'
import React from 'react'
import './Todolist.css'

export default function Todolist(props) {
    function onclickhandler(){
        setvisible(false)
    }

  function onupdatehandler(){
    setupdtaetask(true)
  }
  function handleInputChange(e){
setnewtask(e.target.value)

  }
  function allset(){
    setupdtaetask(false)
  }

    const[iscomponentvisible,setvisible]=useState(true)
    const[isupdatecom,setupdtaetask]=useState(false)
    const[newtask,setnewtask]=useState(props.task)
  return (

    <> 
    { iscomponentvisible && (
    <div className='list-container'>
        
        <div className='list-item' >{newtask} </div>
        <button className='btn1' onClick={onclickhandler}>DELETE</button>
        <button className='btn2' onClick={onupdatehandler}>UPDATE</button>
        <div className="sap"></div>
    
    </div>
   ) }
   {
    isupdatecom && (<><input type="text"  className='update-list' value={newtask} onChange={handleInputChange} maxLength={100} /><button className='btn3' onClick={allset}>OK</button></>
)
   }
    </>
   
    
  )
}
