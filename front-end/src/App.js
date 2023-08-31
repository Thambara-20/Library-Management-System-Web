import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/Footer';
import Home from '../src/Containers/Home/HomePage';
import CustomerSuppportPage from '../src/Containers/CustomerSupport/CustomerSupport';
import NavbarComponent from './Components/NavbarComponent';
import { Component } from 'react';
import SignInPage from './Containers/SignInPage/SignInPage';
import LibraryPage from './Containers/Library/LibraryPage';
//import Signup from './Containers/SignUp/SignUp';




class App extends Component{
  render(){
    return(
    <div>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path="/Library" element={<LibraryPage/>} />
          <Route path="/contactUs"  element={<CustomerSuppportPage/>}/>
          <Route path="/"   element ={<Home/>} />
          <Route path="/SignInPage"   element ={<SignInPage/>} />
        </Routes>
      </div>

      <MainFooter/>
    </div>

    )
  }
}

export default App;
