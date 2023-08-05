
import './App.css';
import Home from './Containers/Home/Home';
import Library from './Containers/Library/Library';
import CustomerSupport from './Containers/CustomerSupport/CustomerSupport';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import SignIn from './Containers/SignIn/SignIn';
import SignUp from './Containers/SignUp/SignUp';
import Footer from './Containers/Footer/FooterContainer';
function App() {
  return (

    <div>
      <NavBar style={{ backgroundColor: "black" }} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/Contact" element={<CustomerSupport />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
      <Footer/>
    </div>


  );
}

export default App;
