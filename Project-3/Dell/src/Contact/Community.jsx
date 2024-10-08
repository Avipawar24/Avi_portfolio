import React from 'react'

const community = [
  {
    title: "Visit the Dell Community",
    description: "Browse product forums, FAQs, and announcements.",
    buttonText: "Get Community Help",
  },
  {
    title: "Learn More About Us",
    description: "Check out our newsroom, investor relations, and social impact plan.",
    buttonText: "Visit Dell Corporate",
  },
  {
    title: "View Our Legal Terms",
    description: "Find terms of sales, warranty info, and return policies.",
    buttonText: "View Our Legal Terms",
  }
];

export const Community = () => {
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-6'>Community & Corporate Information</h1>
      <div className="flex flex-wrap justify-center gap-8 w-full px-4 mb-12">
        {community.map((service, index) => (
          <div key={index} className="service-card p-6 bg-white shadow-lg rounded-lg w-full md:w-1/3 lg:w-1/4 text-center">
            <h3 className='text-2xl h-16 font-semibold mb-4'>{service.title}</h3>
            <p className='text-base mb-4'>{service.description}</p>
            <button className='border p-2 mt-2 text-[#299ee1] hover:bg-[#299ee1] hover:text-white transition-colors duration-300'>{service.buttonText}</button>
          </div>
        ))}
      </div>
    </>
  )
}
