import React from 'react'

export const Box1 = () => {
  return (
    <>
      <div className='flex w-full h-[80vh] justify-between bg-[#005b88]'>
        <div className='w-2/5 flex justify-end items-center'>
          <div className='w-3/5 text-white mr-6'>
            <h5 className='text-lg mb-5'>SAVING LIVES WITH GENIA</h5>
            <h1 className='text-4xl'>Innovating On Behalf Of Patients</h1>
            <p className='text-lg mb-3'>Discover how GenAI enhances patient outcomes and streamlines healthcare delivery.</p>
            <div className='flex gap-1'>
            <button className='border bg-white text-[#005b88] px-2'>Learn More</button>
            <button className='border ml-5 py-3 p-5'>Play Video</button>
            </div>
          </div>
        </div>
        <div className='w-3/5 h-full overflow-hidden'>
          <img className='w-full h-full object-cover' src='https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/061324-cust-story-northwest-medicine-1024x768.jpg/?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768' alt="Northwest Medicine"/>
        </div>
      </div>

      <div className='bg-black py-5'>
        <div className='grid grid-cols-4 gap-4 w-4/5 mx-auto text-white'>
          {['https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-gen-ai-solutions-getty1537473222.jpg?fmt=png-alpha&wid=480&hei=360',
           'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-warm-b2l-servers-pexe9680.png?fmt=png-alpha&wid=480&hei=360 ',
           'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-powerstore-480x360.png?fmt=png-alpha&wid=480&hei=360',
           'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360 ',
            'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/laptop-xps9340-480x360.png?fmt=png-alpha&wid=480&hei=360 ',
            'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-in3030.png?fmt=png-alpha&wid=480&hei=360 ',
            'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/product-wayfinder/dell-homepage-product-wayfinding-cold-monitors-u4025qw.png?fmt=png-alpha&wid=480&hei=360 ',
            'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360 ',
          ].map((img, index) => (
            <div key={index} className='h-[40vh] bg-[#9eafbf]'>
              <img className='h-full w-full object-cover' src={`${img}`} alt={`Random ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className='text-white p-4 w-full bg-[#151d28] pt-4'>
        <p className='text-lg'>Dell Technologies Showcase</p>
        <p className='text-4xl'>Featured Products and Solutions</p>
        <div className='relative flex justify-around items-center py-5'>
          <button className='text-[#569af2] bg-white p-2 rounded-lg'>
          <i className="ri-arrow-left-line"></i>
          </button>
          <div className='absolute ml-96 p-4 bg-white w-1/4 h-auto text-gray-700'>
            <p className='text-lg'>DELL AI FOR TELECOM</p>
            <p className='text-4xl'>Accelerate With Dell AI For Telecom</p>
            <p className='text-lg pb-7'>Make your next breakthrough with our AI ecosystem of Technologies, service, and partnerships.</p>
            <button className='flex items-center text-lg text-[#3788f3]'>Learn More
            <i className="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className='w-1/2 ml-1/4 flex justify-end'>
            <img className='w-full' src='https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/092524-ai-for-telecom-1208x906.jpg/?wid=480&hei=360' alt="Dell AI for Telecom" />
          </div>
          <button className='p-2 bg-white rounded-lg text-[#569af2]'>
          <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>

      <div className='bg-[#1c2c3b] py-20 text-white'>
        <p className='text-lg pl-5'>Dell Support</p>
        <p className='text-4xl pl-5'>We're Here to Help</p>
        <p className='text-lg my-6 pl-5'>From offering expert advice to solving complex problems, we've got you covered.</p>
        <div className='flex justify-center gap-4 text-center'>
          {[
            {icon: <i className="ri-home-5-line"></i>, text: 'Support Home'},
            {icon: <i className="ri-settings-2-line"></i>, text: 'Drivers and Downloads'},
            {icon: <i className="ri-customer-service-line"></i>, text: 'Order Support'},
            {icon: <i className="ri-verified-badge-line"></i>, text: 'Warranty and Contracts'},
            {icon: <i className="ri-service-line"></i>, text: 'Parts and Upgrades'}
          ].map((item, idx) => (
            <div key={idx} className='bg-[#33414e] text-center p-4'>
              <i className={`text-[45px] text-[#47c9e0]`}>{item.icon}</i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className='w-full relative flex justify-center items-center py-8'>
          <div className='w-3/5 mr-96'>
            <img className='w-full' src='https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-premier-1200x675.jpg?wid=1200&hei=675' alt="Premier Support" />
          </div>
          <div className='absolute p-4 bg-black w-1/4 text-white ml-96'>
            <p className='text-lg'>DELL AI FOR TELECOM</p>
            <p className='text-4xl'>Accelerate With Dell AI For Telecom</p>
            <p className='text-lg pb-7'>Make your next breakthrough with our AI ecosystem of technologies, service, and partnerships.</p>
            <button className='flex items-center text-lg text-[#3788f3]'>Learn More
            <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#002b58] p-4 text-white'>
        <p className='ml-8'>Latest from Dell Technologies</p>
        <p className='ml-8 text-4xl mb-5'>What's Happening</p>
        <div className='flex ml-8 w-5/6'>
          {[
            {src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/071724-dt-forum-480x360.jpg', text: 'Harness the full potential of AI at Dell Technologies Forum', buttonText: 'Register northwest'},
            {src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/non-product-images/lifestyle/gettyimages-1182617831-pr7530t-480x360.jpg', text: 'Four Keys to Optimal Outcomes with Generative AI', buttonText: 'Learn More'},
            {src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/031424-tl-data-dna-480x360.jpg', text: 'Building Your Innovation Muscle in the Era of AI', buttonText: 'Read Report'},
            {src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/hp-banner-esg-480x360-jpg.jpg', text: 'Our Purpose in Action', buttonText: 'Read the report'}
          ].map((item, idx) => (
            <div key={idx} className='w-1/3 mr-4 bg-[#00172f]'>
              <div>
                <img className='w-full h-auto object-cover' src={item.src} alt={item.text} />
              </div>
              <div className='h-12 ml-1'>
                <p>{item.text}</p>
              </div>
              <div className='ml-1 flex items-center mb-2'>
                <button>{item.buttonText}</button>
                <span className="material-icons">arrow_right_alt</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-[#133a63] text-white p-12 w-full flex items-center'>
        <div className='w-2/5'>
          <p className='text-lg'>DEMO CENTER</p>
          <p className='text-4xl'>Test Drive the Latest Innovations</p>
          <p className='text-lg'>Experience, experiment and interact with our latest technologies.</p>
          <div className='flex gap-4 items-center mt-5'>
            <button className='bg-[#1777c4] text-white p-2'>Learn More</button>
            <button className='py-5'>Explore Catalog</button>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
        <div className='w-3/5'>
          <img className='w-full h-auto' src='https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/programs-and-loyalty/pan-dell-woman-on-train-1200x675.jpg?fmt=png-alpha&wid=1200&hei=675' alt="Demo Center" />
        </div>
      </div>

      <div className='text-center py-10'>
        <p>Based on my visit today, I would say Dell Technologies is...</p>
        <div className='flex justify-center items-center gap-4'>
          <p>Not at all innovative</p>
          <div className='flex text-4xl'>
            {[...Array(5)].map((_, index) => (
              <i key={index} className="ri-star-line"></i>
            ))}
          </div>
          <p>Extremely innovative</p>
        </div>
      </div>
    </>
  )
}

