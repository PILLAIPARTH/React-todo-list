import { useState } from 'react';
import './App.css';
import Todoform from './component/Todoform';
import Todolist from './component/Todolist';
const Dummy_task=[
  {id:"e1",task:"pay Bill"},
  {id:"e2",task:"learn React"},
  {id:"e3",task:"Complete task"}
]

function App() {

  const[ok,setok]=useState(Dummy_task)

  function onchangehandler(para){
    // const task1 = {
    //   ...para,
    //   id:Math.random().toString()

    // }
    // console.log(task1)
    setok((prev)=>{
      return [para,...prev]

    })

  }
   
  return (
    <div>
      <Todoform  task={onchangehandler}/>
      {ok.map(task => <Todolist task={task.task} key={task.id}/>)}
     
    </div>
  );
}

export default App;
