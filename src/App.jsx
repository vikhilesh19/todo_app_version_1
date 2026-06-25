import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Items from "./components/Items";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";

function App() {
  let [todoitems,settodoitems]=useState([])

  const handleadd=(itemname,itemdate)=>{
    if(itemname && itemdate){
      let newtodoitems=[...todoitems,
      {
        name:itemname,
        date:itemdate,
      }]
      settodoitems(newtodoitems);
    }
    else{
      alert('Enter Both Todo and date');
    }
  }

  const handledelete=(itemname)=>{
    let newtodoitems=todoitems.filter(item=>item.name!==itemname);
    settodoitems(newtodoitems);
  }

  return (
    <center className='todo_container'>
      <Appname />
      <Addtodo handleadd={handleadd} />
      <Welcomemsg items={todoitems}/>
      <Items items={todoitems} handledelete={handledelete}></Items>
    </center>
  )
}
export default App