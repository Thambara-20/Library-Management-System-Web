import React, { useState } from 'react';
import './ProfileInfo.css';
import { updateUser } from '../../services/authService';
import auth from '../../services/authService';

const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    email: 'example@gmail.com',
    address: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if new password and confirm password match
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert('New password and confirm password must match.');
      return;
    }

    // Create an object with only the fields that should be updated
    const updatedData = {
      email: formData.email,
      address: formData.address,
      phone: formData.phone,
      currentPassword: formData.currentPassword,
      newPassword: formData.newPassword,
    };

    try {
      const response = await updateUser(updatedData);

    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile');
    }
  };

  return (
    <div className="ProfileInfo-wrapper" data-aos="fade-up">
      <form onSubmit={handleSubmit}>
        <div className="ProfileInfo-content">
          {/* Left side */}
          <div className="ProfileInfo-left">
            <div className="Account-info">
              <h3>Account Info</h3>
              <h5>Email </h5>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <h5>Address </h5>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              <h5>Phone Number </h5>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <h5>Library Card Number - 1234567890</h5>
            </div>
          </div>

          {/* Right side */}
          <div className="ProfileInfo-right">
            <div className="Login-credentials">
              <h3>Log in Credentials</h3>
              <div>
                <h5>Current password</h5>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                />
                <h5>New Password</h5>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                <h5>Confirm New Password</h5>
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                />
              </div>
              <button className="Button-root" type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
