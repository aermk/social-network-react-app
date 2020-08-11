import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
  {id: 1, message: 'I study react js', likescounter: '15'},
  {id: 2, message: 'My heart is broken ;(', likescounter: '1'},
]

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
