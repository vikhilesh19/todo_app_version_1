import Todoitem from "./Todoitem";
function Items({items,handledelete}){
    return (
        <div className="items_container">
            {items.map(item=><Todoitem todoname={item.name} tododate={item.date} handledelete={handledelete}></Todoitem>)}
      </div>
    )
}
export default Items;