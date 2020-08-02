import React from 'react';
import styles from './Dialogs.module.css'


const Dialogs = () => {
  return(
      <div className ={styles.dialogs}>
        <div className={styles.dialogsItems}> 
            <div className={styles.dialog}>Sergey</div>
            <div className={styles.dialog  + ' ' + styles.active}>Valentina</div>
            <div className={styles.dialog}>Ivan</div>
            <div className={styles.dialog}>Mom</div>
            <div className={styles.dialog}>Dad</div>
        </div>
      <div className={styles.messages}>
        <div className={styles.message}>Yo</div>
        <div className={styles.message}>How are you?</div>
        <div className={styles.message}>What are you doing today?</div>
      </div>
    </div>
  )
}

export default Dialogs;