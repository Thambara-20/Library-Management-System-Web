
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import Home from '../src/Containers/Home/HomePage';
import CustomerSuppportPage from '../src/Containers/CustomerSupport/CustomerSupport';
import LibraryPage from '../src/Containers/Library/LibraryPage';
import NavbarComponent from './Components/navbarComponent';
import CustomerSupport from './Containers/CustomerSupport'
import { Component } from 'react';



class App extends Component{
  render(){
    return(
    <div>
      <NavbarComponent/>
      <div>
        <Routes>
<<<<<<< HEAD
          <Route path="/Library" exact element={<LibraryPage/>} />
          <Route path="/customer" element={<CustomerSupport/>}/>
          <Route path="/"   element ={<HomePage/>} />
=======
          <Route path="/Library" element={<LibraryPage/>} />
          <Route path="/contactUs"  element={<CustomerSuppportPage/>}/>
          <Route path="/"   element ={<Home/>} />
>>>>>>> 1a0ebba1aebbc6267b05a4aab93fd3995f89bfd1
        </Routes>
      </div>

      <MainFooter/>
    </div>

    )
  }
}

export default App;
