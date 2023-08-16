
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import Home from '../src/Containers/Home/HomePage';
import CustomerSuppportPage from '../src/Containers/CustomerSupport/CustomerSupport';
import LibraryPage from '../src/Containers/Library/Library';
import NavbarComponent from './Components/navbarComponent';
import { Component } from 'react';
import { render } from 'react-dom';

class App extends Component{
  render(){
    return(
    <div>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path="/Library" exact element={<LibraryPage/>} />
          <Route path="/customer" element={<CustomerSuppportPage/>}/>
          <Route path="/"   element ={<Home/>} />
        </Routes>
      </div>

      <MainFooter/>
    </div>

    )
  }
}

export default App;
