import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Todoitem1  from "./components/Todoitem1"
import Todoitem2 from "./components/Todoitem2"
function App() {
  return (
    <center className='todo_container'>
      <Appname />
      <Addtodo />
      <div className="items_container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  )
}
export default App