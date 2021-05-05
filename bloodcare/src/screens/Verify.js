import React, { useState } from 'react';
// import image from '../assets/unnamed.jpg';
import authSvg from '../assets/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
// import Nav from 'shared/components/Nav/Nav';

import { useHistory } from "react-router-dom";
import Nav from 'shared/components/Nav/Nav';

const Verify = () => {
    let history = useHistory()
  const [formData, setFormData] = useState({
    otp: '',
  });

  const { otp } = formData;
  const handleChange = text => e => {
    console.log(otp);
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (otp) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post("http://localhost:5000/api/verify", {
           otp
          })
          .then(res => {
            setFormData({
              ...formData,
              otp
            });
            history.push('/login')
            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
             otp
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <div>
      <Nav/>
    <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
       {isAuth() ? <Redirect to='/' /> : null } 
      <ToastContainer />
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Please Verify Your OTP
            </h1>

            <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
              <div className='mx-auto max-w-xs relative '>
                <input
                  className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                  type='text'
                  placeholder='Please Enter OTP'
                  onChange={handleChange('otp')}
                  value={otp}
                />
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'>
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>verify</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-black-100 text-center hidden lg:flex'>
        <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
      ;
    </div>
    </div>
  );
};

export default Verify;
