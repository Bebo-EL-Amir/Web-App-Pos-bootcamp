import React from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartItem from './componentItemDerails/CartItem';
import { cartIndex, useCart } from '../../store';
import toast from 'react-hot-toast';

export default function SideCart() {
  const { closeCart } = cartIndex();
  const { items, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully!', {
      duration: 3000,
      icon: '✅',
    });
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 top-0 left-0 bg-black/50 z-50 flex justify-end w-full h-full  " onClick={closeCart}>
      <div 
        className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-full bg-white text-black shadow-2xl flex flex-col p-4 sm:p-6 animate-slide-in-right relative" 
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
          <h1 className='text-xl sm:text-2xl font-bold text-gray-800'>My Cart <span className="text-xs sm:text-sm font-normal text-gray-500">({items.length})</span></h1>
          <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
             <IoIosCloseCircleOutline className='text-3xl text-gray-500 hover:text-red-500 transition-colors' />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-4 pr-2 custom-scrollbar">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem key={item.documentId || item.id} product={item} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
               <span className="text-6xl grayscale opacity-50">🛒</span>
               <p className="text-lg font-medium">Your cart is empty</p>
               <button onClick={closeCart} className="mt-2 px-6 py-2 border rounded-full hover:bg-gray-50 text-gray-600 transition-colors text-sm">Start Shopping</button>
            </div>
          )}
        </div>

        {/* Footer / Order Summary & Checkout */}
        {items.length > 0 && (() => {
           const subtotal = items.reduce((acc, item) => acc + (item.qty * (item.discountPrice || item.originalPrice || 0)), 0);
           const tax = subtotal * 0.14;
           const totalWithTax = subtotal + tax;
           
           return (
             <div className="border-t border-gray-100 pt-4 mt-4 flex flex-col gap-3">
               {/* Subtotal */}
               <div className="flex justify-between text-gray-600">
                 <span>Subtotal</span>
                 <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
               </div>
               
               {/* Tax */}
               <div className="flex justify-between text-gray-600">
                 <span>Service Tax (14%)</span>
                 <span className="font-semibold text-red-500">+${tax.toFixed(2)}</span>
               </div>
               
               {/* Total */}
               <div className="flex justify-between text-lg font-bold text-gray-900 border-t pt-3 mt-1">
                 <span>Total</span>
                 <span className="text-green-600">${totalWithTax.toFixed(2)}</span>
               </div>
               
               {/* Checkout Button */}
                <button 
                  onClick={handleCheckout}
                  className="w-full py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-100 active:scale-95 transform duration-150 mt-2"
                >
                 Checkout
               </button>
             </div>
           );
        })()}
      </div>
    </div>
  )
}
