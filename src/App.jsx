import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingPage from './components/ListingPage';
import WarehouseDetailsPage from './components/WarehouseDetailsPage'
import Navbar from './components/navbar';

const App = () => {
  return (
 <div>
  <Navbar/>
  <Router>
    <Routes>
    <Route path='/' Component={ListingPage}/>
    <Route path='/warehouse/:id' Component={WarehouseDetailsPage}/>
    </Routes>
  </Router>
  
 
 </div>

  );
};

export default App;
