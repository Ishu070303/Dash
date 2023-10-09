import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { BiLogoDiscord } from 'react-icons/bi';

import google from '../images/google.png';
import apple from '../images/apple.png';

const LoginPage = () => {
  return (
   <>
   <div className='flex flex-row'>
      <div className='basis-1/2 bg-[#4285F4] h-screen flex justify-center'>
        <div className='w-[90%] h-[90%] m-auto'>
        <h4 style={{fontFamily: 'Poppins'}} className='text-2xl font-bold text-white'>LOGO</h4>
        <div className='flex justify-center mt-56'>
          <h1 style={{fontFamily: 'Montserrat'}} className='font-bold text-6xl text-white items-center'>Board.</h1>
        </div>
        <div className='flex flex-row gap-1.5 items-center w-60 m-auto justify-between text-white mt-[16rem]'>
            <AiFillGithub className='w-8 h-8' />
            <AiFillTwitterCircle className='w-8 h-8' />
            <AiFillLinkedin className='w-8 h-8' />
            <BiLogoDiscord className='w-8 h-8' />
        </div>
        </div>
      </div>
      <div className='basis-1/2 flex justify-center'>
        <div className='w-96 m-auto'>
        <div>
            <h3 style={{ fontFamily: 'Montserrat'}} className='text-3xl font-bold'>Sign In</h3>
            <h6 style={{ fontFamily: 'Lato'}} className='text-base font-normal mb-5'>Sign in your account</h6>
            <div className='flex gap-x-5'>
                <div className='flex items-center w-48 justify-evenly p-1'>
                  <img src={google} alt='google' className='w-3 h-3'  />
                  <button style = {{fontFamily: 'Montserrat'}} className='text-xs font-normal text-neutral-400'>
                    Sign In with Google
                  </button>
                </div>
                <div className='flex items-center w-48 justify-evenly p-1'>
                  <img src={apple} alt='apple' className='w-3 h-3'  />
                  <button style = {{fontFamily: 'Montserrat'}} className='text-xs font-normal text-neutral-400'>
                    Sign in with apple
                  </button>
                </div>
            </div>
            <form className='w-96 h-80 mt-5 px-7'>
                <h6 style={{ fontFamily: 'Lato'}} className='text-base font-normal leading-10'>Email address:</h6>
                <input className= 'w-80 h-11 bg-[#F5F5F5] rounded-lg text-black hover:[#EAEAEA]' type='text' /><br />
                <h6 style={{ fontFamily: 'Lato'}} className='text-base font-normal leading-10 mt-2' >Password :</h6>
                <input className= 'w-80 h-11 bg-[#F5F5F5]  rounded-lg text-black hover:bg-[#EAEAEA]' type='password' /> <br />

                <a href='/' style={{ fontFamily: 'Lato'}} className='text-base font-normal text-[#346BD4] leading-10'>Forgot Password ? </a> <br/>
                <button style={{ fontFamily: 'Montserrat'}} className='w-80 h-11 bg-[#4285F4] rounded-lg text-white text-base font-bold' >
                  Sign In
                </button>
            </form>
            <h6 className='text-base font-normal text-center'>Don't have an account ? <a href='/' className='text-[#346BD4] inline-block'>Register here</a></h6>
        </div>
      </div>
    </div>
   </div>
   </>
  )
}

export default LoginPage;