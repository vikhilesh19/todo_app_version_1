import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoItemsContext } from "../store/todo_items_store";
function Items(){
    const contextobj=useContext(TodoItemsContext);
    const itemsfromcontext=contextobj.items;
    const handledelete=contextobj.handledelete;
    return (
        <div className="items_container">
            {itemsfromcontext.map(item=><Todoitem todoname={item.name} tododate={item.date} handledelete={handledelete}></Todoitem>)}
      </div>
    )
}
export default Items;