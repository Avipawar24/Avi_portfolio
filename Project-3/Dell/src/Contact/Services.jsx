import React from 'react'

const services = [
  {
    title: "Get Tech Support & IT Help",
    description: "Identify your device to resolve technical issues yourself or contact tech support for more help.",
    buttonText: "Contact Technical Support",
    image: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/gethelp.png",
  },
  {
    title: "Chat with Sales",
    description: "Get expert help and product recommendations for new purchases from a sales advisor.",
    buttonText: "Chat with Us Online",
    image: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/chatwithusa.png",
  },
  {
    title: "Check Orders",
    description: "Track, cancel, return or contact customer care about a recent order.",
    buttonText: "Contact Order Support",
    image: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/checkyourorders.png",
  },
  {
    title: "Request a Callback",
    description: "Fill out our form and a sales advisor will call you back with personalized business solutions.",
    buttonText: "Get a Callback",
    image: "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/requestsalescallback.png",
  }
];

export const Services = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold my-6">We’re here to help</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {services.map((service, index) => (
          <div key={index} className="service-card bg-white shadow-lg rounded-lg p-6 text-center">
            <img src={service.image} alt={service.title} className="mx-auto mb-4 h-[100px] w-auto object-contain" />
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-base mb-4">{service.description}</p>
            <button className="border p-2 text-[#299ee1] hover:bg-[#299ee1] hover:text-white transition-colors duration-300">
              {service.buttonText}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
