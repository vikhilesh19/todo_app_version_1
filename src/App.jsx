import Appname from "./components/Appname"
import Addtodo from "./components/Addtodo"
import Items from "./components/Items";
function App() {
  let todoitems=[
    {
      name:'1st Task',
      date:'20/06/2026',
    },
    {
      name:'2nd Task',
      date:'25/06/2026',
    }
  ];

  return (
    <center className='todo_container'>
      <Appname />
      <Addtodo />
      <Items items={todoitems}></Items>
    </center>
  )
}
export default App