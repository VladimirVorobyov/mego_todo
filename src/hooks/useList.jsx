import  {useMemo} from 'react'

export function GetListSort(item,list){
    const ListSort = useMemo(()=>{
     if(item){
     if(item === 'userId'){
      return [...list].sort((a,b)=>a[item]-b[item])
     } 
     return [...list].sort((a,b)=>a[item].localeCompare(b[item]))
   }
   return list
  },[item, list]);
  return ListSort;
}
export function GetListSortAndSearch (item,list,search){ 
const ListSort = GetListSort(item,list);
const ListSearchAndSort = useMemo(()=>{
    return ListSort.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase()))
  },[search,ListSort])
  return ListSearchAndSort
}