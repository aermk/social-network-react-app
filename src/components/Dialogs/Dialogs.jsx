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

  let dialogsData = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Valentina'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Makar'},
    {id: 5, name: 'Mom'},
    {id: 6, name: 'Dad'},
  ]

  let messagesData = [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'What are you doing today?'},
    {id: 4, message: 'Haha lol'},
    {id: 5, message: 'NO'},
    {id: 6, message: 'I want to eat'},
  ]

  return(
      <div className ={styles.dialogs}>
        <div className={styles.dialogsItems}> 
        <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogsItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>

      <div className={styles.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id}/>
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id}/>
        <Message message={messagesData[3].message} id={messagesData[3].id}/>
        <Message message={messagesData[4].message} id={messagesData[4].id}/>
      </div>
    </div>
  )
}

export default Dialogs;