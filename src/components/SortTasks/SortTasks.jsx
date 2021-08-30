import cl from './SortTasks.module.css';

export default function SortTasks({defaultValue, options, value, addItemSort,serchValue,addSerchValue}){
  
  return(
    <div className={cl.container}>
      <div className={cl.sort}>
        <select value={value} onChange={(e)=>addItemSort(e.target.value)} >
        <option disabled value="">{defaultValue}</option>
        {options.map((el)=><option key={el.value} value={el.value}>{el.name}</option>)}
      </select>
      </div>
      <div>
        <input value={serchValue} className={cl.input}
        onChange={(e)=>addSerchValue(e.target.value)} placeholder="Поиск задачи"></input>
      </div>
     
    </div>
     
  )
}