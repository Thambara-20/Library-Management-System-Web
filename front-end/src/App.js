import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainFooter from "./Components/footer";
import HomePage from "./Containers/Home/HomePage";
import CustomerSuppportPage from "./Containers/CustomerSupport/customerSupportPage";
import LibraryPage from "./Containers/Library/libraryPage";
import NavbarComponent from "./Components/navbarComponent";

<<<<<<< Updated upstream
import { Component } from "react";
import RegisterPage from "./Containers/Register/RegisterPage"
import Signup from "./Containers/SignUP/Signup";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/Library" exact element={<LibraryPage />} />
          <Route path="/customer" element={<CustomerSuppportPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUP" element={<Signup />} />
          <Route path = "/register-page" element = {<RegisterPage/>} />
        </Routes>
      </div>
    );
  }
=======
import MainFooter from './Components/footer';
import HomePage from './Containers/Home/HomePage';
import CustomerSuppportPage from './Containers/CustomerSupport/customerSupportPage';
import LibraryPage from './Containers/Library/libraryPage';
import NavbarComponent from './Components/navbarComponent';
import {useState} from 'react';
import { Component } from 'react';

import Signup from './Containers/SignUP/Signup';
import  Temp from "./temp";
import { render } from 'react-dom';






class App extends Component{

    State = {
      loginPage : true,
      content : <div></div>
    }
    handleLoginPage = ()=>{
      this.State.loginPage = false;
      this.setState(this.isInLoginPage);
      this.setState(this.State.content);
      document.body.style = 'background:#F5F5F5;';
    }
    render(){
      
      if(this.State.loginPage){
        this.State.content = <div>
                    <NavbarComponent onHandle={this.handleLoginPage}/>
                      <div>
                        <Routes>
                          <Route path="/Library" exact element={<LibraryPage/>} />
                          <Route path="/customer" element={<CustomerSuppportPage/>}/>
                          <Route path="/"   element ={<HomePage/>} />
                        </Routes>
                      </div>
                      <div  className='bottom-[120px] relative'>
                        <MainFooter/>
                      </div>
                </div>
      }else{
        this.State.content = <div>
                              <Routes>
                                <Route path="/SignUP"   element ={<Signup/>} />
                              </Routes>
                            </div>
      }

      return(
          <div>{this.State.content}</div>
      )
    }
>>>>>>> Stashed changes
}

export default App;
