import React from 'react';
import women from '../img/woman_hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full items-center'>
        <div className='flex flex-col'>
          <div className='font-semibold flex items-center uppercase text-red-500'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>  
            New Trend 
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
          ELEVATE YOUR STYLE <br />
            <span className='font-semibold'>ELEGANT</span>
          </h1>
          <Link to='/' className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>

        <div className='hidden lg:block'>
          <img src={women} alt="Stylish Woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
