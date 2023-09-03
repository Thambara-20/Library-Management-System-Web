import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/Footer';
import Home from '../src/Containers/Home/HomePage';
import { Component } from 'react';
import SignInPage from './Containers/SignInPage/SignInPage';
import LibraryPage from './Containers/Library/LibraryPage';
//import Signup from './Containers/SignUp/SignUp';




class App extends Component{
  render(){
    return(
    <div>
      <div>
        <Routes>
          <Route path="/Library" element={<LibraryPage/>} />
          <Route path="/ContactUs"  element={<CustomerSuppportPage/>}/>
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
