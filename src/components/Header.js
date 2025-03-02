import React, { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { amount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container flex mx-auto items-center justify-between h-full'> 
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={logo} alt="Logo" />
          </div>
        </Link>
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className="cursor-pointer flex relative"
        >
          <BsBag className='text-2xl' />
          <div className='absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center bg-red-500'>
            {amount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
