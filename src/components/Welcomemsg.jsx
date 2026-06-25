import styles from './welcome.module.css'

const Welcomemsg=({items})=>{
    if(items.length==0){
        return <p className={styles.welcome}>Enjoy Your Day</p>
    }
}
export default Welcomemsg;