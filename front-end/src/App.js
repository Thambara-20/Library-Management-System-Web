import './App.css';
import { Route, Routes } from 'react-router-dom';

import MainFooter from './Components/Footer';
import Home from '../src/Containers/Home/HomePage';
import { Component } from 'react';
import SignInPage from './Containers/SignInPage/SignInPage';
import LibraryPage from './Containers/Library/LibraryPage';
import CustomerSuppportPage from './Containers/CustomerSupport/CustomerSupportPage';
import AdminMainPage from './Containers/Admin/AdminMainPage';
import UserManagement from './Containers/Admin/UserManagement';
import BookManagement from './Containers/Admin/BookManagement';

import BookAdd from './Containers/Admin/AddBook';
import BookRemove from './Containers/Admin/RemoveBook';
import BookUpdate from './Containers/Admin/UpdateBook';


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
          <Route path="/admin"   element ={<AdminMainPage/>} />
          <Route path="/admin/userManagement"   element ={<UserManagement/>} />
          <Route path="/admin/bookManagement"   element ={<BookManagement/>} />

          <Route path="/AddBook"   element ={<BookAdd/>} />
          <Route path="/RemoveBook"   element ={<BookRemove/>} />
          <Route path="/UpdateBook"   element ={<BookUpdate/>} />


        </Routes>
      </div>
      <MainFooter/>
    </div>

    )
  }
}

export default App;