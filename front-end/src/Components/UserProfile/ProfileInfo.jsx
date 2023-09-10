import React from 'react';
import Button from '@mui/material/Button';
import './ProfileInfo.css'; // Import the CSS file

const ProfileInfo = () => {
  return (
    <div className='ProfileInfo-wrapper'>
      <div className='ProfileInfo-content'>
        {/* Left side */}
        <div className='ProfileInfo-left'>
          <div className='Account-info'>
            <h3>Account Info</h3>
            <h5>Email </h5>
            <input type="text" name="email" defaultValue="example@gmail.com" />
            <h5>Address </h5>
            <input type="text" name="address" defaultValue="1234 Example St. Example, CA 12345" />
            <h5>Phone Number </h5>
            <input type="text" name="phone" defaultValue="123-456-7890" />
            <h5>Library Card Number - 1234567890</h5>
          </div>
        </div>

        {/* Right side */}
        <div className='ProfileInfo-right'>
          <div className='Login-credentials'>
            <h3>Log in Credentials</h3>
            <h5>Username - example123</h5>
            <div>
              <h5>New Password</h5>
              <input type="password" name="newPassword" />
              <h5>Confirm New Password</h5>
              <input type="password" name="confirmNewPassword" />
            </div>
            <button className='Button-root'>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
