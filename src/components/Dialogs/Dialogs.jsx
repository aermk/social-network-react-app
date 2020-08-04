import React from 'react';
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const DialogsItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
      <div className={`${styles.dialog} ${styles.activeLink}`}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}


const Dialogs = () => {
  return(
      <div className ={styles.dialogs}>
        <div className={styles.dialogsItems}> 
        <DialogsItem name='Sergey' id='1'/>
        <DialogsItem name='Valentina' id='2'/>
        <DialogsItem name='Ivan' id='3'/>
        <DialogsItem name='Makar' id='4'/>
        <DialogsItem name='Mom' id='5'/>
        <DialogsItem name='Dad' id='6'/>
      </div>

      <div className={styles.messages}>
        <Message message ='Yo'/>
        <Message message ='How are you?'/>
        <Message message='What are you doing today?'/>
        <Message message='Haha lol'/>
        <Message message='NO'/>
        <Message message='I want to eat'/>
      </div>
    </div>
  )
}

export default Dialogs;