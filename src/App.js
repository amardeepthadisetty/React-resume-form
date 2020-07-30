import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProfileForm from './components/form-components/profile';
import ProfilePage from './components/Profile/profile-page';

function App() {
  return (
    <Router>
      <div className="container">
        
        <Route exact path="/" component={ProfileForm} />
        <Route exact path="/profile" component={ProfilePage} />
      </div>
    </Router>
    
  );
}

export default App;
