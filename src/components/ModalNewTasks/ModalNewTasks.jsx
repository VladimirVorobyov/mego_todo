import cl from './ModalNewTasks.module.css';
import NewTask from '../NewTask/NewTask';

const ModalNewTasks = ({create,visible,setVisible}) => {
  const classActive = [cl.myModal];
  if(visible) classActive.push(cl.active)
  return (
    <div className={classActive.join(' ')} onClick={()=>setVisible(false)} >
        <div className={cl.myModalContext} onClick={(e)=>e.stopPropagation()} >
          <NewTask create={create}></NewTask>
        </div>
    </div>
  )
}

export default ModalNewTasks