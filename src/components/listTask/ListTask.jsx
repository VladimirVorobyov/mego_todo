import React from 'react';
import clases from './ListTask.module.css';
import OldTask from '../OldTask/OldTask';
import SortTasks from '../SortTasks/SortTasks';
import ButtonNewTask from '../ButtonNewTask/ButtonNewTask';
import './App.css';

export default function ListTask({list,remove,value,addItemSort,
  addSerchValue, serchValue, defaultValue,options,onModal,limit,setLimit}){
  return(
    <div>
      <h2 className={clases.heading}>Список задач</h2>
      <ButtonNewTask  onModal={onModal}/>
      
      <SortTasks addSerchValue={addSerchValue} serchValue={serchValue}
        defaultValue={defaultValue} options={options} 
        value={value} addItemSort={addItemSort}/> 
     
        <div className={clases.container}>
         {list.map((el)=>{
         return  <OldTask el={el}  key={el.id} remove={remove}  name ={el.title} 
         discription = {el.userId} />})}
        </div>
      
   
    </div>

  )
} 