import React, { useEffect, useState } from 'react';
import './ProfileInfo.css';
import { updateUser } from '../../services/authService';
import { getUser } from '../../services/authService';


const ProfileInfo = () => {
  const [formData, setFormData] = useState({
    email: '',
    address: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });


  useEffect(() => {
    async function fetchData() {
      const user = await getUser();
      setFormData({
        email: user.email,
        address: user.address,
        phone: user.phone_number,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    }
    fetchData();
  },[])


  const [errors, setErrors] = useState({
    email: '',
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

    // Clear the error message when the user edits the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the input fields are empty and set error messages accordingly
    const errorFields = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errorFields[key] = 'This field is required.';
      }
    });

    setErrors(errorFields);

    // Check if any errors were set
    if (Object.keys(errorFields).length > 0) {
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
      setFormData({
        email: '',
        address: '',
        phone: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
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
              <h5>Email</h5>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <h5>Address</h5>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <p className="error-message">{errors.address}</p>}
              <h5>Phone Number</h5>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
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
                {errors.currentPassword && (
                  <p className="error-message">{errors.currentPassword}</p>
                )}
                <h5>New Password</h5>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                />
                {errors.newPassword && <p className="error-message">{errors.newPassword}</p>}
                <h5>Confirm New Password</h5>
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={formData.confirmNewPassword}
                  onChange={handleChange}
                />
                {errors.confirmNewPassword && (
                  <p className="error-message">{errors.confirmNewPassword}</p>
                )}
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
