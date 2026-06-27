import { useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo_items_store";

function Addtodo()
{
  const contextobj=useContext(TodoItemsContext);
  const handleadd=contextobj.handleadd;
  let [todo,settodo]=useState();
  let [duedate,setduedate]=useState();

  const handletodo=(event)=>{
    settodo(event.target.value);
  }
  const handledate=(event)=>{
    let newdate=event.target.value;
    setduedate(newdate);
  }
  const handle=()=>{
    handleadd(todo,duedate);
    settodo('');
    setduedate('');
  }
    return(
        <div className="container text-center">
        <div className="row my_row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" onChange={handletodo} value={todo}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={handledate} value={duedate}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success" onClick={()=>handle()}>Add<IoMdAddCircle /> </button>
          </div>
        </div>
      </div>
    )
}
export default Addtodo;