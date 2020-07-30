import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProfileForm from './components/form-components/profile';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={ProfileForm} />
      </div>
    </Router>
    
  );
}

export default App;
