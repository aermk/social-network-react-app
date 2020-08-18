import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './components/redux/state';
import { addPost, updateNewPostChange } from './components/redux/state';


export let rerenderEntireTrees = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostChange={updateNewPostChange}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
