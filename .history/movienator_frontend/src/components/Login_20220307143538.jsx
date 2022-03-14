import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/movienator.png';

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video 
            src={shareVideo}
          />
        </div>
    </div>
  )
}

export default Login