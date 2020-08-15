import React from 'react';
import styles from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)
  let messagesElements = props.state.messages.map((m) => <Message message={m.message} id={m.id}/>)

  let newMessageElement = React.createRef()

  const sendMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return(
    <div className ={styles.dialogs}>
      <div className={styles.dialogsItems}> 
        { dialogsElements }
      </div>

      <div className={styles.messages}>
        { messagesElements }
      </div>
        <div className={styles.textarea}>
          <div>
            <textarea ref={ newMessageElement }></textarea>
          </div>
          <div>
            <button onClick={ sendMessage }>Send message</button>
          </div>
        </div>
      </div>
  )
}

export default Dialogs;