import { Input, Button } from 'antd';
import React, {useState} from 'react';
import clases from './NewTask.module.css';
import { nanoid } from 'nanoid';

export default function NewTask ({create}){
    const [task, createSate] = useState({title:'',userId:''});

  const createTaskName = (e) => {
   createSate({...task,title:e.target.value});
  }
  const createTaskDiscription = (e) => {
    createSate({...task,userId:e.target.value});
  }
  const addTask = (e) => {
    e.preventDefault();
    const blockTask = {
      ...task,id:nanoid()
    }
    create(blockTask);
    createSate({title:'',userId:''});
  }
  return (
    <div>
      <h2 className={clases.heading}>Новая задача</h2>
    <Input className={clases.input} value={task.title} onChange={createTaskName} placeholder="Name"/>
    <Input className={clases.input} value={task.userId} onChange={createTaskDiscription} placeholder="Discription"/>
    <Button className={clases.button} type="primary" onClick={addTask} >ADD</Button>
    </div>
  )
   
}