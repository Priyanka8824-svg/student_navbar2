import './App.css';

import Navbar from './compoents/Layout/Navbar.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Home from './compoents/Pages/Home.js';
import About from './compoents/Pages/About.js';
import Show from './compoents/Pages/Show.js';
import Register from './compoents/Pages/Register.js';
import Gallary from './compoents/Pages/Gallary.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}> </Route>
            <Route path='/show' element={<Show/>}> </Route>
            <Route path='/register' element={<Register/>}> </Route>
            <Route path='/gallary' element={<Gallary/>}> </Route>
            <Route path='/about' element={<About/>}> </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
