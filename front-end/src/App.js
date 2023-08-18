
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import HomePage from './Containers/Home/HomePage';
import CustomerSuppportPage from './Containers/CustomerSupport/customerSupportPage';
import LibraryPage from './Containers/Library/libraryPage';
import NavbarComponent from './Components/navbarComponent';

import { Component } from 'react';

import Signup from './Containers/SignUP/Signup';



class App extends Component{
  render(){
    return(
    <div>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route path="/Library" exact element={<LibraryPage/>} />

          <Route path="/customer" element={<CustomerSuppportPage/>}/>
          <Route path="/"   element ={<HomePage/>} />
          <Route path="/SignUP"   element ={<Signup/>} />

        </Routes>
      </div>
       <div  className='bottom-[120px] relative'>
      <MainFooter/>
        
       </div>
    </div>

    )
  }
}

export default App;
