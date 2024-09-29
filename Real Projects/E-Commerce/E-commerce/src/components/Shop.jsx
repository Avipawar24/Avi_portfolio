import React, { useContext } from 'react'
import { Products } from '../assets/context/Context'
import {Link} from 'react-router-dom'
import Iphone from './Iphone';
import Ipad from './Ipad';

const Shop = () => {
  document.title="Apple"
  const {data} = useContext(Products);
  return (
    <div>
        <div>
        <p className='py-3 bg-zinc-200 text-center'>Get up to ₹5000.00 instant cashback on selected iPhone models with eligible American Express, Axis Bank and ICICI Bank cards.. <span className='text-blue-700'><Link to='/shop'>Shop{' >'}</Link></span> </p>
        <div className='image w-full pt-0 pb-0 p-32 bg-black'>
          <img className='w-full' src="https://www.apple.com/v/iphone-16-pro/a/images/meta/iphone-16-pro_overview__ejy873nl8yi6_og.png?202409261827" alt="" />
        </div>
        <p className='py-2 '></p>
        <div>
          <img className='w-full' src="https://overclockers.ru/st/legacy/blog/430440/565650_O.JPG" alt="" />
        </div>
        </div>
        <div className=''>
          <Iphone/>
          <Ipad/>       
           </div>
    </div>
  )
}

export default Shop
