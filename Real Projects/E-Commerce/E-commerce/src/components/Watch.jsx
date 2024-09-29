import React, { useContext } from 'react'
import { Products } from '../assets/context/Context'
import { Link } from 'react-router-dom'

const Watch = () => {
  const {data}=useContext(Products)
  const {watch}=data
  return (
    <div>
        <p className='py-3 bg-zinc-200 text-center'>Get up to ₹5000.00 instant cashback on selected iPhone models with eligible American Express, Axis Bank and ICICI Bank cards.. <span className='text-blue-700'><Link to='/shop'>Shop{' >'}</Link></span> </p>
        <div className='border-1 w-full h-60 flex justify-between items-center'>
          <h1 className='text-9xl font-semibold'>Apple Watch</h1>
          <div className='text-3xl font-semibold w-72 mr-10'>
          <h3>The ultimate device for a healthy life.</h3>
          </div>
        </div>
        <video autoPlay loop muted src="https://www.apple.com/105/media/ww/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large_2x.mp4"></video>
    
        <div className='bg-zinc-100 pb-16'>
            <div className='flex justify-between pt-32 p-24 items-center'>
            <h1 className='text-6xl font-semibold'>Explore the line-up.</h1>
            <Link className='text-blue-700 text-xl'>Compare all models {'>'}</Link>
            </div>
        <div className='flex ml-10 items-center gap-32 justify-center text-center'>
        {watch.map((item,index)=>(<div className='' key={item.id}>
            <div className='hover:scale-105'> <img className='' src={item.productImage} alt="" /> </div>
            <div className='w-52 m-auto'>
              <h5 className='text-xl font-semibold'>{item.productName}</h5>
              <h6 className='text-xl'>{item.desc}</h6>
              <h5 className='font-semibold'>From <i className="ri-money-rupee-circle-line"></i>{item.price}</h5>
            <div className='flex mt-10 items-center gap-8'>
              <button className='px-6 py-2 bg-blue-600 text-white rounded-full '>Learn more</button>
              <p className='text-blue-600'>Buy {'>'}</p>
              </div>
            </div>
          
          </div>))}
          
        </div>
        <hr className='w-1/1 border-1 border-zinc-500 mt-14'/>
          </div>
    </div>
  )
}

export default Watch