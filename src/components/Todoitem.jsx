import { MdDelete } from "react-icons/md";

function Todoitem({todoname,tododate,handledelete}){
    return(
        <div className="container">
            <div className="row my_row">
            <div className="col-6">
                {todoname}
            </div>
            <div className="col-4">
                {tododate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger my_button" onClick={()=>handledelete(todoname)}> Delete<MdDelete /> </button>
            </div>
            </div>
      </div>
    )
}
export default Todoitem;