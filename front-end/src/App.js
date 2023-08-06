import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/footer';
import HomePage from './Containers/homePage';
import CustomerSuppportPage from './Containers/customerSupportPage';
import LibraryPage from './Containers/libraryPage';
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
          <Route path="/"   element ={<HomePage/>} />
        </Routes>
      </div>

      <MainFooter/>
    </div>

    )
  }
}

export default App;
