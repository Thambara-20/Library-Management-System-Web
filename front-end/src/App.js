
import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import HomePage from './Containers/homePage';
import CustomerSuppportPage from './Containers/customerSupportPage';
import LibraryPage from './Containers/libraryPage';
import NavbarComponent from './Components/navbarComponent';
import CustomerSupport from './Containers/CustomerSupport'
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
          <Route path="/"   element ={<Home/>} />
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
