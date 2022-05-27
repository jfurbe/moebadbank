import React from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import NavBar from './NavBar';
import Login from './Login';
import './App.css';

function App(){

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path='/createAccount' element={<CreateAccount />}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/allData' element={<AllData/>}/>
      </Route>
      </Routes>
      
    </>
  )
}

function Layout(){

  return (

    <div id='lay'>
    <NavBar/>
    <Login/>
    <Outlet/>
    </div>
  )
}

export default App;
