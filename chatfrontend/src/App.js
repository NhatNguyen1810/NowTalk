import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Login from './components/Auth/Login'; 
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import './App.scss';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from '@fortawesome/free-solid-svg-icons'
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Chat}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>


          <Route render={() => <h1> Page not found </h1>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
