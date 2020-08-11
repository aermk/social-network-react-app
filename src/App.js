import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

// import { Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';



const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div>
        <div className='app-wrapper'>
          <Header />
          <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/> 
            <Route path='/profile' render={() => <Profile posts={props.posts}></Profile>}/>
            <Route path='/news' render={() => <News />}/>
            <Route path='/music' render={() => <Music />}/>
            <Route path='/settings' render={() => <Settings />}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;