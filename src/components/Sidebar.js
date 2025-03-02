import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div
      className={`fixed top-0 h-full bg-white shadow-2xl transition-all duration-300 z-[200] px-4 lg:px-[35px] 
      ${isOpen ? 'right-0' : '-right-full'} w-full md:w-[35vw] xl:max-w-[30vw] `}
    >
      <div className="flex justify-between items-center border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({cart.length})
        </div>
        <div 
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>


      <div className="flex flex-col gap-y-2 h-[450px] lg:h-[520px] overflow-y-auto border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>

      <div className="flex flex-col gap-y-3 py-4 min-h-[80px]">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold text-lg">
            <span>Total: </span>${parseFloat(total).toFixed(2)}
          </div>
          <button 
            onClick={clearCart} 
            className="cursor-pointer  py-3 px-4 bg-red-500 text-white flex justify-center items-center text-xl rounded-md hover:bg-red-600 transition"
          >
            <FiTrash2 className="text-2xl" />
          </button>
        </div>
        <Link to={'/'}
          className='bg-gray-700 flex p-4 justify-center items-center w-full font-medium text-white'>
            Checkout
          </Link>
      </div>
    </div>
  );
};

export default Sidebar;
