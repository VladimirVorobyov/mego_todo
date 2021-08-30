import { Button } from 'antd';
import cl from '../listTask/ListTask.module.css'

export default function ButtonNewTask({onModal}){
  return(<div className={cl.container}>
    <Button className={cl.newButton} onClick={onModal}>Добавить новую задачу</Button>
  </div>) 
}