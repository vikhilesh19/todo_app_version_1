import { createContext, useReducer } from "react";

export const TodoItemsContext=createContext([]);

const todoitemsreducer=(currenttodoitems,action)=>{
  let newtodoitems=currenttodoitems;
  if(action.type==='NEW_ITEM'){
    newtodoitems=[...currenttodoitems,
      {
        name:action.payload.itemname,
        date:action.payload.itemdate,
      }]
  }
  else if(action.type==='DELETE_ITEM'){
    newtodoitems=currenttodoitems.filter(item=>item.name!==action.payload.itemname);
  }
  return newtodoitems;
}



const TOdoitemsContextprovider=({children})=>{
  // let [todoitems,settodoitems]=useState([]);
  const [todoitems,dispatchtodoitems]=useReducer(todoitemsreducer,[]);

  const handleadd=(itemname,itemdate)=>{
    if(itemname && itemdate){
      const newitemaction={
        type:"NEW_ITEM",
        payload:{
          itemname,
          itemdate,
        }
      };
      dispatchtodoitems(newitemaction);
    }
    else{
      alert('Enter Both Todo and date');
    }
  }

  const handledelete=(itemname)=>{
    const deleteitemaction={
      type:"DELETE_ITEM",
      payload:{
        itemname,
      }
    };
    dispatchtodoitems(deleteitemaction);
  }
  return(
    <TodoItemsContext.Provider value={{
      items:todoitems,
      handleadd:handleadd,
      handledelete:handledelete,
    }}>{children}</TodoItemsContext.Provider>
  )
}
export default TOdoitemsContextprovider;