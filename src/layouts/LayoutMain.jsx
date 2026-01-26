import { Outlet, useNavigate } from 'react-router-dom';
import SideMenu from '../components/SideMenu';
import { useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { cartIndex, menuIndex, useCart } from '../../store';



export default function LayoutMain() {
const {openCart} = cartIndex();
const {menuOpen, toggleMenu} = menuIndex();
const { items } = useCart();

// Calculate total items quantity
const totalItems = items.reduce((acc, item) => acc + (item.qty || 0), 0);

const navigate = useNavigate();
  // Protection For Route
  useEffect(() => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full flex ">
      {menuOpen && <SideMenu />}
      <div className="w-full h-dvh overflow-auto bg-yellow">
        <div className="w-full p-1 px-5 flex justify-between items-center ">
        {!menuOpen && (
          <FiMenu 
            onClick={toggleMenu} 
            className="text-2xl text-gray-700 cursor-pointer hover:text-yellow-500 transition-colors " 
          />
        )}
        <div 
          onClick={openCart} 
          className="relative p-2  bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all  active:scale-95 group ml-auto"
        >                                                                       
          <HiOutlineShoppingBag className="text-2xl text-gray-700 group-hover:text-yellow-500 transition-colors" />
          
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm animate-in zoom-in duration-300">
              {totalItems}
            </span>
          )}
        </div>

        </div>
        <Outlet />
      </div>
    </div>
  );
}
