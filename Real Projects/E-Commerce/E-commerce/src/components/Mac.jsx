import React, { useContext } from 'react'
import { Products } from '../assets/context/Context'
import { Link } from 'react-router-dom'

const Mac = () => {
  const {data}=useContext(Products)
  const {mac}=data
  return (
    <div>
        <p className='py-3 bg-zinc-200 text-center'>Last chance to get AirPods with Mac and Apple Pencil with iPad. Offer ends on 30 September. <span className='text-blue-700'><Link to='/shop'>Shop{' >'}</Link></span> </p>
        <div className='border-1 w-full h-60 flex justify-between items-center'>
          <h1 className='text-9xl font-semibold'>Mac</h1>
          <div className='text-3xl font-semibold w-72 mr-10'>
          <h3>If you can dream it, <br/> Mac can do it.</h3>
          </div>
        </div>
        <video autoPlay loop muted src="https://www.apple.com/105/media/us/mac/family/2024/60fc0159-4236-4a03-8534-f5ba07e538c5/anim/welcome/large_2x.mp4"></video>
    
        <div className='bg-zinc-100 pb-16'>
            <div className='flex justify-between pt-32 p-24 items-center'>
            <h1 className='text-6xl font-semibold'>Explore the line-up.</h1>
            <Link className='text-blue-700 text-xl'>Compare all models {'>'}</Link>
            </div>
            <div className='flex gap-0 text-1xl justify-center ml-24 w-[25%] bg-white rounded-full'>
  <button className='bg-black text-white rounded-full px-6 py-2'>Laptops</button>
  <button className='hover:bg-black hover:text-white text-black rounded-full px-6 py-2'>Desktops</button>
  <button className='hover:bg-black hover:text-white text-black rounded-full px-6 py-2'>Displays</button>
</div>
        <div className='flex ml-10 mt-20 items-center gap-5 text-center'>
        {mac.map((item,index)=>(<div className='' key={item.id}>
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
        <hr className='w-1/2 border-1 border-zinc-500 mt-14 ml-20'/>
          </div>
    </div>
  )
}

export default Mac