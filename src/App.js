// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08112cf7';
      showAlert('Dark Mode has been enbled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enbled', 'success');
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Utils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          {/* /users --> Component 1 */}
          {/* /users/ --> Component 2*/}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm
              heading="Try TextUtils - Word Counter, Character Couter, Remove extra Spaces"
              mode={mode}
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
