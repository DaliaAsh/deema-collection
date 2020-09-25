import React from 'react';
import './App.css';
import Navigation from './pages/Navigation'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee); 
function App() {
  return (
    <div className="App">
    <Navigation/>
    </div>
  );
}

export default App;
