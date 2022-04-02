import './App.css';
import Login from './Login';
import Event from './Event';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="Feed">
      <BrowserRouter>
        <Routes>
          <Route path="/event">
            <Event />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
