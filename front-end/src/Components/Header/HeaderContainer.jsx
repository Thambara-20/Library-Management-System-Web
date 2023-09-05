import React, { useEffect, useState } from "react";
import Header from "./Header";
import SignInPage from "../../Containers/SignInPage/SignInPage";
import auth from "../../services/authService";

const HeaderContainer = () => {
  const [showSignUpPopup, setShowSignUpPopup] = useState(false);
  const [isUserLogIn, setUserLogIn] = useState(false);
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openSignUpPopup = () => {
    setShowSignUpPopup(true);
  };

  const closeSignUpPopup = () => {
    setShowSignUpPopup(false);
  };

  const changeIconLogIn = () => {
    setUserLogIn(true);
  };

  const changeIconLogOut = () => {
    auth.logout();
    setUserLogIn(false);
    setAdminLoggedIn(false);
  };

  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  useEffect(() => {
    const user = auth.getCurrentUser();
    try {
      if (user.name) {
        setUserLogIn(true);
        if (user.isAdmin) {
          setAdminLoggedIn(true);
        } else {
          setAdminLoggedIn(false);
        }
      } else {
        setUserLogIn(false);
        setAdminLoggedIn(false);
      }
    } catch {
      setUserLogIn(false);
      setAdminLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Header
        isAdminLoggedIn={isAdminLoggedIn}
        isUserLogIn={isUserLogIn}
        menuOpen={menuOpen}
        getMenuStyles={getMenuStyles} {/* Pass getMenuStyles as a prop */}
        openSignUpPopup={openSignUpPopup}
        closeSignUpPopup={closeSignUpPopup}
        changeIconLogIn={changeIconLogIn}
        setMenuOpen={setMenuOpen}
        changeIconLogOut={changeIconLogOut}
      />
      {showSignUpPopup && (
        <SignInPage onClose={closeSignUpPopup} onSuucessClose={changeIconLogIn} />
      )}
    </>
  );
};

export default HeaderContainer;
