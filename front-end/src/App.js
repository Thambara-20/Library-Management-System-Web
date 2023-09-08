
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Containers/Home/Home';
import LibraryPage from './Containers/Library/LibraryPage';
import CustomerSupportPage from './Containers/CustomerSupport/CustomerSupportPage';
import AdminMainPage from './Containers/Admin/AdminMainPage';
import UserManagement from './Containers/Admin/UserManagement';
import BookManagement from './Containers/Admin/BookManagement';
import AddBook from './Containers/Admin/AddBook';
import auth from './services/authService';
import { ToastContainer } from 'react-toastify';
import BookUpdate from './Containers/Admin/UpdateBook';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdminLoggedIn: true,
    };
  }

  async componentDidMount() {
    const currentUser = await auth.getCurrentUser();
    
    if (currentUser) {
      this.setState({
        isAdminLoggedIn: currentUser.isAdmin,
      });

    }
   
  }

  render() {
    const { isAdminLoggedIn } = this.state;

    return (
      <div>
          <ToastContainer />
        <div>
          <Routes>

            <Route path="/Library" element={<LibraryPage />} />
            <Route path="/ContactUs" element={<CustomerSupportPage />} />

            <Route path="/"element={ <Home /> }/>
            
            {isAdminLoggedIn ? <Route path="/admin" element={<AdminMainPage />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/userManagement" element={<UserManagement />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/bookManagement" element={<BookManagement />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/bookManagement/addbook" element={<AddBook />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/bookManagement/updatebook/:bookid" element={<BookUpdate />} /> : <Route path="/" />}
         

          </Routes>
        </div>
      </div>
    );

  }
}

export default App;