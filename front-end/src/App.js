import React, { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainFooter from './Components/Footer';
import Home from './Containers/Home/Home';
import LibraryPage from './Containers/Library/LibraryPage';
import CustomerSupportPage from './Containers/CustomerSupport/CustomerSupportPage';
import AdminMainPage from './Containers/Admin/AdminMainPage';
import UserManagement from './Containers/Admin/UserManagement';
import BookManagement from './Containers/Admin/BookManagement';

import auth from './services/authService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdminLoggedIn: false,
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
        <div>
          <Routes>
            {/* Other routes */}
            <Route path="/Library" element={<LibraryPage />} />
            <Route path="/ContactUs" element={<CustomerSupportPage />} />
            <Route
              path="/"
              element={
                <Home
                  // Pass the user data to the Home component
                />
              }
            />

            {isAdminLoggedIn ? <Route path="/admin" element={<AdminMainPage />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/userManagement" element={<UserManagement />} /> : <Route path="/" />}
            {isAdminLoggedIn ? <Route path="/admin/bookManagement" element={<BookManagement />} /> : <Route path="/" />}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
