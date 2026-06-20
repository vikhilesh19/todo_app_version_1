import Todoitem from "./Todoitem";
function Items({items}){
    return (
        <div className="items_container">
            {items.map(item=><Todoitem todoname={item.name} tododate={item.date}></Todoitem>)}
      </div>
    )
}
export default Items;