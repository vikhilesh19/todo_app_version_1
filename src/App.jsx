import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Items from "./components/Items";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemsContext } from "./store/todo_items_store";
import TOdoitemsContextprovider from "./store/todo_items_store";


function App() {
  
  return (
    <TOdoitemsContextprovider>
      <center className='todo_container'>
        <Appname />
        <Addtodo />
        <Welcomemsg />
        <Items></Items>
      </center>
    </TOdoitemsContextprovider>
  )
}
export default App