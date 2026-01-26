import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Untitled design.png';
import { MdSpaceDashboard } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { BiSolidMessage } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { VscSettings } from "react-icons/vsc";
import { MdLocalPostOffice } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { menuIndex } from '../../store';
import { useState } from 'react';


export default function SideMenu() {
  const {closeMenu} = menuIndex();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeMenu();
    }, 400); 
  };

const handleLogout = () =>{
sessionStorage.removeItem('token');
localStorage.removeItem('token');
navigate('/login');
};

  return (
    <div className={`fixed inset-0 z-50 bg-black/50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`} onClick={handleClose}>
      <div 
        className={`w-[250px] h-full bg-white border-r border-r-gray-50 text-[14px] shadow-2xl ${isClosing ? 'animate-slide-out-left' : 'animate-slide-in-left'}`} 
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-end p-3 items-center gap-4  " >
          <div className="p-2 hover:bg-gray-200 rounded-full transition-colors ">
            <IoMdArrowRoundBack className="text-[22px] text-gray-700 cursor-pointer" onClick={handleClose}/>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-full flex flex-col gap-3 p-4 ">
          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/">
           <MdSpaceDashboard className='text-[20px]'/> Dashboard
          </NavLink>
          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/FoodDrinks">
            <FaBurger className='text-[20px]'/>Food & Drinks
          </NavLink>
          {/* <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/menu">
            <MdRestaurantMenu className='text-[23px]'/>Menu
          </NavLink> */}
          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/messages">
            <BiSolidMessage className='text-[20px]'/> Messages
          </NavLink>

          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/invoices">
            <GiMoneyStack className='text-[25px]'/> Bills
          </NavLink>

          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/settings">
             <VscSettings className='text-[20px]'/> Settings
          </NavLink>

          <div className="pl-2.5 py-3">
          <p className='text-[14px] text-gray-600'>Other</p></div>

          <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/notification">
            <MdLocalPostOffice className='text-[20px]'/> Notification
            <div className=' rounded-[50%] bg-yellow w-6 h-6 flex items-center justify-center gap-[35px]'><p>3</p></div>
          </NavLink>
           <NavLink className={({ isActive }) => `hover:bg-yellow p-3 rounded flex gap-3 items-center ${isActive ? 'bg-yellow' : ''}`} to="/support">
            <MdSupportAgent className='text-[20px]'/> Support 
            
          </NavLink>

          <a href="https://intuitive-cactus-25a6544a8c.strapiapp.com/admin">Admin Panal</a>
        </div>
        <div className="flex p-4">
          <button className="btn btn-error" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

// "hover:bg-yellow p-3 rounded"
