import React from 'react';
import ImageOne from '../images/Juicest-Burger-Everfeature.jpg.jpg';
import ImageTwo from '../images/egg-2.jpg';

const Content = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Juciest Burger</h2>
          <p className='mb-2'>Crispy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white h-screen font-mono py-40'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>Crispy, delicious, and nutritious</p>
          <span>$18</span>
        </div>
      </div>
    </>
  );
};

export default Content;