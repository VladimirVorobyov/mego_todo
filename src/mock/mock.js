import { nanoid } from 'nanoid';
export const ListOldTasks = [
    {id:nanoid(), title: 'HTML', userId:3},
    {id:nanoid(), title: 'CSS', userId:4},
    {id:nanoid(), title: 'JS', userId:5},
    {id:nanoid(), title: 'React', userId:2},
  ]
export const defaultValue="Сортировка по";
export const options=[{value:'title',name:"Названию"},{value:'userId',name:"Описанию"}];
export const noneTasks = 'НЕТ ЗАДАЧ'; 

export const getPageCount = (totalCount,limit)=>{
  return Math.ceil(totalCount/limit)
}

export const getListPages = (totalCount) => {
  const arrayPage = [];
  for(let i=0; i<totalCount; i++){
    arrayPage.push(i+1);
  }
  return arrayPage;
}
