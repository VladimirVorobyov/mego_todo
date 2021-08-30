import React from 'react';
import clases from './OldTask.module.css';
import { Button,Card } from 'antd';
import { useHistory } from 'react-router-dom';

export default function OldTask(props) {
  const router = useHistory();


  
 return <div className ={clases.card}>
   <Card    title={props.name} >
        <p>{props.discription}</p>
        <Button onClick={()=>router.push(`/tasks/${props.el.id}`)}>Открыть</Button>
        <Button onClick={()=>props.remove(props.el)}>Удалить</Button>
      </Card>
 </div>
} 