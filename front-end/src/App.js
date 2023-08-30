
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import Home from '../src/Containers/Home/HomePage';
import CustomerSuppportPage from '../src/Containers/CustomerSupport/CustomerSupport';
import LibraryPage from '../src/Containers/Library/LibraryPage';
import NavbarComponent from './Components/navbarComponent';
import { Component } from 'react';
import SignInPage from './Containers/SignInPage/SignInPage';
import LibraryPage from './Containers/Library/libraryPage';



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
          <Route path="/signIn"   element ={<SignInPage/>} />
          <Route path="/Test"   element ={<Testing/>} />
        </Routes>
      </div>

      <MainFooter/>
    </div>

    )
  }
}

export default App;
