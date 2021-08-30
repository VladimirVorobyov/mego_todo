import { useParams } from "react-router"
import { useEffect, useState } from "react";
import LinkListFeach from '../API/LinkListFeach'
import { Spin } from 'antd';
import cl from './Task.module.css';

export default function FullPage(){
  const params = useParams();
   const [loading,setLoading] = useState(false)
   const [fullTask, setFullTask] = useState({})
   const [comments, setComments] = useState([])
  useEffect(()=>{
    getFeach(params.id);
    getComments(params.id)
  },[])
  
  async function getFeach(id){
    setLoading(true)
    const responce = await LinkListFeach.getLinkId(id) 
    setFullTask(responce.data)
    setLoading(false)
  }
   async function getComments(id){
    setLoading(true)
    const responce = await LinkListFeach.getLinkComments(id); 
    setComments(responce.data)
    console.log(responce.data)
    setLoading(false)
  }
  return(<>
  {!loading && comments.length !==0 ? <div>описание твоей задачи {params.id}
  <p>{fullTask.title}</p>
  <h2>Комментарии</h2>
  {comments.map((el)=>{
    return(<div key={el.id}>
    <h3>{el.name}</h3>
            <p>{el.email}</p>
    </div>)
  })}
  
  </div>
        :<div className={cl.spin}><Spin/></div>}
  </>)
} 