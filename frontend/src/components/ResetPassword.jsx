import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
  const email = query.get('email');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: ('Passwords do not match')
      })
      return;
    }

    try {
      const response = await axios.post('http://localhost:3100/api/reset-password', {
        token,
        email,
        newPassword,
      });

      Swal.fire({
        icon: 'success',
        title: (response.data.message)
      })

      setTimeout(() => {
        navigate('/account/login');
      }, 1500);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: (error.response.data.message || 'An error occurred')
      })
    }
  };

  return (
    <div className='container mt-5 p-5 w-50 bg-dark rounded-4'>
      <h2 className='text-white'>Reset <span className='text-danger'>Password</span></h2>
      <form className='form-control' onSubmit={handleSubmit}>
        <label>New Password:</label>
        <input
          className='form-control'
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label>Confirm Password:</label>
        <input
          className='form-control'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className='btn btn-primary m-2' type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
