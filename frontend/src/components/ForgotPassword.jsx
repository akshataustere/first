import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HashLoader } from 'react-spinners'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3100/api/forget-password', { email });

      Swal.fire({
        icon: 'success',
        title: response.data.message
      });
      setLoading(false);

    } catch (error) {
      setLoading(false);
      if (error.response && error.response.data && error.response.data.message) {
        Swal.fire({
          icon: 'error',
          title: error.response.data.message
        });
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='container d-flex flex-column align-items-center mt-5 p-3'>
      {loading ? (
        <HashLoader />
      ) : (
        <div className='card p-4' style={{ maxWidth: '400px', width: '100%' }}>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group mb-3'>
              <input
                type="email"
                name="email"
                className='form-control'
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='d-grid'>
              <button className='btn btn-success' type="submit">Submit</button>
            </div>
          </form>
          {message && <div className='alert alert-info mt-3'>{message}</div>}
          {error && <div className='alert alert-danger mt-3'>{error}</div>}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
