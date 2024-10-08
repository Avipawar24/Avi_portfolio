import React from 'react'
import { Navbar } from '../Home component/Navbar'
import { Services } from './Services'
import { Purchase } from './Purchase'
import { Community } from './Community'
import { Footer } from '../Home component/Footer'

export const FooterBottom =()=>{
  return <>
        <div className='bg-[#f0f0f0] p-4'>
      <b className='text-[#737374]'>Marketing Campaign Claims/Disclaimers</b>
        <p>Marketing Campaign Claims/Disclaimers</p>
        <p>† Screen simulated, subject to change. Feature availability and rollout timing varies by market and device.</p>
        <p>15. Dell has the industry’s most comprehensive portfolio of multi-cloud-capable storage from a single vendor. Based on Dell analysis. February 2024.</p>
        <p>16. The world’s most comprehensive storage portfolio with robust security . Based on Dell analysis of Primary, Unstructured, PBBA, and HCI segments, February 2024.</p>
        <p>i. Based on Dell analysis of cybersecurity software capabilities, flexibility-related features including functional, operational and hardware flexibility; and efficiency-related features including data reduction, storage capacity, data protection overhead, hardware, rack units, lifecycle management, and ENERGY STAR certified configuration, June 2024.</p>

        <p className='mb-4 mt-4'><b className='text-[#737374]'>*Dell Terms And Conditions:</b>
        Apply to all sales available on request or at "Terms and Conditions of Sale" located at the bottom of our homepage at
        <a className='text-[#299ee1]' href='https://www.dell.com'> www.dell.com</a>.</p>
      </div>
  </>
}

export const Contact = () => {
  return (
    <>
     <div>
      <Navbar/>
      <div className='flex items-center bg-gradient-to-t from-blue-400 to-blue-600 border w-full h-36'>
        <h className='text-3xl ml-10 text-white'>Contact Us</h>
        <img className='h-full ml-20' src='https://i.ibb.co/Xykf4V1/image-13.png' alt="Contact Us" />
      </div>

     <div className='flex w-full p-2 mb-4 mt-2 border-b items-center gap-12 justify-center'>
       <p className='w-40 text-center'>Dell Equipment & Service Help</p>
       <p className='w-40 text-center'>More Services and Support</p>
       <p className='w-40 text-center'>Community & Corporate Information</p>
       <p className='w-40 text-center'>Rewards & Partner Programs</p>
       <p className='w-40 text-center'>Need More Help?</p>
     </div>

     <Services/>
     <Purchase/>

     <div className='p-10 mb-4 pb-12 text-white bg-[url(https://media.istockphoto.com/id/1386705180/photo/abstract-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=CPRq0i7pucf2-dCb4LxPpCV0tmIxaBAVkzLMeUDpAE0=)] bg-cover bg-center border w-full'>
       <p className='text-center text-4xl mb-3'>Dell APEX</p>
       <p className='text-center mb-5'>Learn more about our cloud experiences delivered as-a-Service.</p>
       <button className='bg-white mx-auto block p-2 text-[#299ee1]'>Visit APEX</button>
     </div>

     <Community/>

    <div>
    <div className='text-center'>
    <h className='text-4xl'>Rewards and Partner Programs</h>
    </div>
     <div className='flex p-3 mt-4 gap-20 justify-center'>
     <div className="service-card">
          <div className='h-24'>
          <h3 className='text-2xl pt-4 pb-4'>Learn More About Partners</h3>
          </div>
          <div className='h-10'>
          <p className='text-base'>Find or become a Dell Technologies Partner.</p>
          </div>
          <div>
          <button className='border p-2 mt-2 text-[#299ee1]'>View Program Details</button>
          </div>
        </div>
        <div className="service-card">
          <div className='h-24'>
          <h3 className='text-2xl pt-4 pb-4'>Discover Dell Rewards</h3>
          </div>
          <div className='h-10'>
          <p className='text-base'>Find our rewards details, FAQ page, and more.</p>
          </div>
          <div>
          <button className='border p-2 mt-2 text-[#299ee1]'>How Reward Work</button>
          </div>
        </div>
     </div>
     </div>

    <div className='mb-12 px-12'>
    <p className='text-center text-4xl p-4'>Where to find us</p>
    <div className='grid grid-cols-4 gap-2'>
    <div>
    <h1 className='font-bold mb-4 mt-4'>Registered Office Address:</h1>
    <p>Registered Office Address:</p>
    <p>Limited</p>
    <p>Crystal Downs,</p>
    <p>Survey no. 7/1, 7/2, 7/3,</p>
    <p>Embassy Golf Links Business Park,</p>
    <p>Off-Intermediate Ring Road, Domlur,</p>
    <p>Challaghatta Village, Varthur Hobli,</p>
    <p>Bengaluru- 560071, Karnataka, India.</p>
    </div>
<div>
   <h1 className='font-bold mb-4 mt-4'>Support:</h1>
   <a href='https://www.dell.com/support/incidents-online/ContactUs/Dynamic?spestate&ref=cpcl_techithelp0_cta_primary_contacttechnicalsupport'>Contact Technical Support</a>
   <a href='https://www.dell.com/support/contents/category/contact-information/customer-support?ref=cpcl_ordersupport0_cta_primary_contactordersupport'>Contact Order Support</a>
</div>
<div>
  <h1 className='font-bold mb-4 mt-4'>Phone Support:</h1>
  <p>Call: 1800-425-4002</p>
</div>
<div>
  <h1 className='font-bold mb-4 mt-4'>Hours of Operations:</h1>
 <div>
  <p className='font-bold mb-4 mt-4'>Chat with Sales: </p>
  <p>For Consumer : Mon-Fri, 9am to 6pm</p>
  <p>For Business: Mon-Fri, 9am to 6pm</p>
 </div>
 <div>
  <p className='font-bold mb-4 mt-4'>Call Sales:</p>
  <p>For Consumer : Mon-Fri, 9am to 6pm</p>
  <p>For Business: Mon-Fri, 9am to 6pm</p>
 </div>
 <div>
  <p className='font-bold mb-4 mt-4'>Buy on WhatsApp:</p>
  <p>For Consumer : Mon-Fri, 9am to 6pm</p>
  <p>For Business: Mon-Fri, 9am to 6pm</p>
 </div>
</div>
<div>
  <h1 className='font-bold mb-4 mt-4'>Dispute Resolution</h1>
  <h1 className='font-bold mb-4 mt-4'>Grievance Officer</h1>
  <p>Mr. Saikat Ray</p>
  <p>Senior Manager, Technical Support</p>

  <h1 className='font-bold mb-4 mt-4'>Nodal Officer</h1>
  <p>Ms. Ruchira Sinha</p>
  <p>Legal Counsel</p>

  <h1 className='font-bold mb-4 mt-4'>Dell International Services India Pvt Ltd.</h1>
  <p>Crystal Downs,</p>
  <p>Survey no. 7/1, 7/2, 7/3,</p>
  <p>Embassy Golf Links Business Park,</p>
  <p>Off-Intermediate Ring Road, Domlur,</p>
  <p>Challaghata Village, Varthur Hobli,</p>
  <p>Bengaluru- 560071,Karnataka, India.</p>
</div>
<div>
  <h1 className='font-bold mb-4 mt-4'>Service Centers</h1>
  <p>Locate an authorized carry-in service center in your region.</p>
  <a className='text-[#299ee1]' href='https://www.dell.com/support/home/en-in/servicecenter'>Find a Service Center</a>
</div>
    </div>
    </div>

     </div>
    <Footer/>
    <FooterBottom/>
    </>
  )
}
