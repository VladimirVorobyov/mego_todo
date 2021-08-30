import { Button } from 'antd';
import cl from './ButtonPages.module.css'
export default function ButtonPages({total,page,addPage}){
  return(<>
    {total.map((el)=>{
     return <Button onClick={()=>addPage(el)}
     key={el} className={cl.pageCurrent}
     type={el===page && "primary" }>{el}</Button>})} 
  </>)
}