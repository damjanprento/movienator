import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';

import { genres } from '../utils/data';
import logo from '../assets/movienator.png';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize';


const Sidebar = ({ user, closeToggle }) => {
    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
      <div className="flex flex-col justify-between bg-teal-600 h-full overflow-y-scroll min-w-210 hide-scrollbar">
          <div className="flex flex-col">
              <Link 
                  to="/"
                  className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                  onClick={handleCloseSidebar}
              >
                  <img src={logo} alt="logo" className="w-full" />
              </Link>

              <div className="flex flex-col gap-5">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                    onClick={handleCloseSidebar}
                >
                    <RiHomeFill />
                    Home
                </NavLink>
                <h3 className="mt-2 px-5 text-base 2xl:text-xl" style={{ color: 'black' }}>Discover Genres</h3>
                {genres.slice(0, genres.length - 1).map((genre) => (
                    <NavLink
                        to={`/genre/${genre.name}`}
                        className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
                        onClick={handleCloseSidebar}
                        key={genre.name}
                    >
                    <img src={genre.image} className="w-8 h-8 rounded-full shadow-sm" alt="category" />
                        {genre.name}
                    </NavLink>
                ))}
              </div>
          </div>
          {user && (
              <Link
                to={`user-profile/${user._id}`}
                className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
                onClick={handleCloseSidebar}
            >
                <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
                <p>{user.userName}</p>
              </Link>
          )}
      </div>
    )
}

export default Sidebar