import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProfileForm from './components/form-components/profile';

function App() {
  return (
    <div className="container">
      Hello React app
      <ProfileForm/>
    </div>
  );
}

export default App;
