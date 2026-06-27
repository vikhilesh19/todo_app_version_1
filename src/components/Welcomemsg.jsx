import { useContext } from 'react';
import styles from './welcome.module.css'
import { TodoItemsContext } from '../store/todo_items_store';

const Welcomemsg=()=>{
    const contextobj=useContext(TodoItemsContext);
    const itemsfromcontext=contextobj.items;
    if(itemsfromcontext.length==0){
        return <p className={styles.welcome}>Enjoy Your Day</p>
    }
}
export default Welcomemsg;