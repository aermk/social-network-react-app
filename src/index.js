import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostChange, subscribe } from './components/redux/state';
import state from './components/redux/state'

export let rerenderEntireTrees = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTrees(state);

subscribe(rerenderEntireTrees);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
