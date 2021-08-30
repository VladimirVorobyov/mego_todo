import React, {useEffect, useRef, useState} from 'react';
import ListTask from '../components/listTask/ListTask';
import ModalNewTasks from '../components/ModalNewTasks/ModalNewTasks';
import {GetListSortAndSearch} from '../hooks/useList'
import {defaultValue,options,getPageCount,getListPages } from '../mock/mock';
import LinkListFeach from '../API/LinkListFeach'
import { Spin } from 'antd';
import cl from './Task.module.css';
import ButtonPages from '../components/ButtonPages/ButtonPages';
import {useObserver} from "../hooks/useObserver";


const Task = () => {
  const [list, addList] = useState([])
  const [itemSelect,addSelect] = useState('');
  const [serchValue, setSerchValue] = useState('');
  const [visible,setVisible] = useState(false);
  const [loading,setLoading] = useState(false);
  const [totalPages,setTotalPages] = useState(0);
  const [limit,setLimit] = useState(10);
  const [page,setPage] = useState(1);
  const lastElement = useRef();
  
  const ListSearchAndSort = GetListSortAndSearch(itemSelect,list,serchValue);
  const addSerchValue = (newElem) => {
    setSerchValue(newElem);
  }
     useObserver(lastElement, page < totalPages, loading, () => {
        setPage(page + 1);
    })

  useEffect(()=>{
    getFeach()
  },[page])
  
  async function getFeach(){
    setLoading(true)
    const responce = await LinkListFeach.giveArray(limit,page) 
    addList([...list,...responce.data])
    const totalCount = responce.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount,limit))
    setLoading(false)
  }
  let listTotalPages = getListPages(totalPages);
  const createnewTasks = (newElem) => {
    addList([...list,newElem])
    setVisible(false)
  }
  const addItemSort = (sort)=> {
   addSelect(sort);
  }
  const addPage = (page)=> {
    setPage(page);
  }
  const removeTasks = (task) => {
    addList(list.filter((el)=>el.id !== task.id))
  }
  const onNewModalTask = () => {
    setVisible(true)
  }
  return(<>
    <ModalNewTasks create={createnewTasks} visible={visible} setVisible={setVisible}/>
   
      <ListTask addSerchValue={addSerchValue} serchValue={serchValue} value={itemSelect}
     addItemSort={addItemSort} defaultValue={defaultValue} options={options} 
     list={ListSearchAndSort} remove ={removeTasks}onModal={onNewModalTask}
     limit={limit} setLimit={setLimit}/> 
     <div ref={lastElement} style={{height:'20px', background:'red'}}></div>
     
     {loading && <div className={cl.spin}><Spin/></div> }
     
 
   <ButtonPages total={listTotalPages} page={page} addPage={addPage}/>
  </>)
} 
export default Task