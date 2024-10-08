import React from 'react'

const services = [
  {
    title: "Shop Dell Premier",
    description: "Shop from a tailored and customizable site.",
    buttonText: "Visit Dell Premier",
  },
  {
    title: "Buy on WhatsApp",
    description: "Message directly one of our sales experts or find the perfect product with the help of our virtual assistant.",
    buttonText: "Chat with Us Online",
  },
  {
    title: "Request a Dell Advisor Callback",
    description: "Fill out our form and we’ll call.",
    buttonText: "Contact Order Support",
  },
  {
    title: "Make a Return",
    description: "Return your eligible purchase within 15 days.",
    buttonText: "Get a Callback",
  },
  {
    title: "Enterprise Accounts",
    description: "Sign in to manage your enterprise account and assets.",
    buttonText: "Contact Technical Support",
  },
  {
    title: "Find a Partner",
    description: "Locate an Authorised Partner near you.",
    buttonText: "Chat with Us Online",
  },
  {
    title: "Shop Online",
    description: "Make an online purchase at Dell.com.",
    buttonText: "Contact Order Support",
  },
  {
    title: "Get Global Help",
    description: "Traveling or relocating? We can help.",
    buttonText: "Get a Callback",
  }
];

export const Purchase = () => {
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-6'>Help Making a Purchase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
        {services.map((service, index) => (
          <div key={index} className="service-card bg-white shadow-lg rounded-lg p-6 text-center">
            <div className='h-16'>
            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
            </div>
            <div className='h-32'>
            <p className='text-base mb-4'>{service.description}</p>
            </div>
            <button className='border border-blue-700  p-2 mt-2 text-[#299ee1] hover:bg-[#299ee1] hover:text-white transition-colors duration-300'>
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

