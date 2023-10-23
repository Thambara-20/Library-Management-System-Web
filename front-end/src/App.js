
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home';
import LibraryPage from './Containers/Library/LibraryPage';
import CustomerSupportPage from './Containers/CustomerSupport/CustomerSupportPage';
import AdminMainPage from './Containers/Admin/AdminMain/AdminMainPage';
import UserManagement from './Containers/Admin/Users/UserManagement';
import BookManagement from './Containers/Admin/Books/BookManagement';
import AddBook from './Containers/Admin/AddBook/AddBook';
import auth from './services/authService';
import { ToastContainer } from 'react-toastify';
import BookUpdate from './Containers/Admin/UpdateBook/UpdateBook';
import SignUp from './Containers/SighUpPage/SignUp';
import AboutUs from './Containers/AboutUs/AboutUs'
import Profile from './Containers/UserProfile/Profile';
import BookDetails from './Containers/Library/Bookdetails/BookDetails';
import ReservedBooksPage from './Containers/Admin/Reservations/ReservedBookspage';
import PendingApprovalsPage from './Containers/Admin/Approvals/PendingApprovalsPage';
import BarrowingsPage from './Containers/Admin/Barrowings/BarrowingsPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdminLoggedIn: false,
    };
  }

  async componentDidMount() {
    const currentUser =  auth.getCurrentUser();
    
    if (currentUser) {
      this.setState({
        isAdminLoggedIn: currentUser.isAdmin,
        
      });
      console.log(this.isAdminLoggedIn)

    }
   
  }

  render() {
    const { isAdminLoggedIn } = this.state;
    const isSmallScreen = window.innerWidth <= 1200; // You can adjust the screen width as needed
  
    return (
      <div>
        <ToastContainer />
        <div>
          <Routes>
            <Route path="/ContactUs" element={<CustomerSupportPage />} />
            <Route path="Register" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/Library" element={<LibraryPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
  
            <Route path="/Profile/:page" element={<Profile />} />
            <Route path="/book/:bookId" element={<BookDetails />} />
  
            {/* Conditional rendering of admin routes */}
            {!isSmallScreen && isAdminLoggedIn && (
              <>
                <Route path="/admin" element={<AdminMainPage />} />
                <Route path="/admin/userManagement" element={<UserManagement />} />
                <Route path="/admin/bookManagement" element={<BookManagement />} />
                <Route path="/admin/bookManagement/addbook" element={<AddBook />} />
                <Route
                  path="/admin/bookManagement/updatebook/:bookid"
                  element={<BookUpdate />}
                />
                <Route
                  path="/admin/bookManagement/Reservations"
                  element={<ReservedBooksPage />}
                />
                <Route
                  path="/admin/bookManagement/PendingApprovals"
                  element={<PendingApprovalsPage />}
                />
                <Route
                  path="/admin/bookManagement/Barrowings"
                  element={<BarrowingsPage />}
                />
              </>
            )}
          </Routes>
        </div>
      </div>
    );
  }
}
  

export default App;