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

  let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Valentina'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Makar'},
    {id: 5, name: 'Mom'},
    {id: 6, name: 'Dad'},
  ]

  let messages = [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing today?'},
    {id: 4, message: 'Haha lol'},
    {id: 5, message: 'NO'},
    {id: 6, message: 'I want to eat'},
  ]

  let dialogsElements = dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)
  let messagesElements = messages.map((m) => <Message message={m.message} id={m.id}/>)

  return(
      <div className ={styles.dialogs}>
        <div className={styles.dialogsItems}> 
        { dialogsElements }
      </div>

      <div className={styles.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;