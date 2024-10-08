import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className='bg-[#f0f0f0] p-8 border border-black'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          <div>
            <p><a href='http://127.0.0.1:5173/'>IN/EN</a></p>
            <p><a href='https://www.dell.com/en-in/sitemap'>Site Map</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Account</h3>
            <p><a href='https://www.dell.com/myaccount/en-in'>My Account</a></p>
            <p><a href='https://www.dell.com/myaccount/en-in/orders'>Order Status</a></p>
            <p><a href='https://www.dell.com/myaccount/en-in/account-settings/profile'>Profile Settings</a></p>
            <p><a href='https://www.dell.com/support/mps/en-in/myproducts'>My Products</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <p><a href='https://www.dell.com/support/home/en-in'>Support Home</a></p>
            <p><a href='https://www.dell.com/support/incidents-online/en-in/contactus/dynamic?spestate'>Contact Technical Support</a></p>
            <p><a href='https://www.dell.com/en-in/lp/return-policy'>Returns</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Connect with Us</h3>
            <p><a href='https://www.dell.com/community/en/categories/dell-community'>Community</a></p>
            <p><a href='https://www.dell.com/en-in/lp/contact-us'>Contact Us</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Our Offerings</h3>
            <p><a href='https://www.dell.com/en-in/dt/solutions/artificial-intelligence/index.htm'>Artificial Intelligence</a></p>
            <p><a href='https://www.dell.com/en-in'>Products</a></p>
            <p><a href='https://www.dell.com/en-in/lp/dt/solutions'>Solutions</a></p>
            <p><a href='https://www.dell.com/en-in/dt/services/index.htm'>Services</a></p>
            <p><a href='https://www.dell.com/en-in/shop/deals'>Deals</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Our Company</h3>
            <p><a href='https://www.dell.com/en-in/dt/corporate/about-us/who-we-are.htm'>Who We Are</a></p>
            <p><a href='https://jobs.dell.com/'>Careers</a></p>
            <p><a href='https://www.delltechnologiescapital.com/'>Dell Technologies Capital</a></p>
            <p><a href='https://investors.delltechnologies.com/'>Investors</a></p>
            <p><a href='https://www.dell.com/en-in/dt/corporate/social-impact.htm'>ESG & Impact</a></p>
            <p><a href='https://www.dell.com/en-in/dt/case-studies-customer-stories/index.htm'>Customer Stories</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Our Partners</h3>
            <p><a href='https://dell.my.site.com/FindAPartner/s/partnersearch?language=en&country=in'>Find a Partner</a></p>
            <p><a href='https://www.dell.com/en-in/lp/dt/oem-solutions'>OEM Solutions</a></p>
            <p><a href='https://www.delltechnologies.com/partner/en-in/partner/partner.htm'>Partner Program</a></p>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <p><a href='https://www.dell.com/en-in/blog/'>Blog</a></p>
            <p><a href='https://www.dell.com/en-in/lp/dell-rewards-program'>Dell Rewards</a></p>
            <p><a href='https://www.dell.com/en-in/dt/events/index.htm'>Events</a></p>
            <p><a href='https://www.dell.com/en-in/lp/privacy-center'>Privacy Centre</a></p>
            <p><a href='https://www.dell.com/en-in/dt/about-us/security-and-trust-center/index.htm'>Security & Trust Centre</a></p>
            <p><a href='https://www.dell.com/en-in/dt/software-downloads/index.htm'>Trial Software Downloads</a></p>
          </div>
        </div>
        
        <div className='mt-12 flex justify-center items-center'>
          <a className='font-bold text-[#737374] mr-10' href='https://www.dell.com/en-in'>Dell Technologies</a>
          <a className='font-bold text-[#737374]' href='https://www.dell.com/en-in/lp/dt/dell-premier'>Dell Premier</a>
        </div>
        
        <div className='mt-10 text-center'>
          <p className='inline-block mr-4'><a href=''>Copyright © 2024 Dell Inc.</a></p>
          <p className='inline-block mr-4'><a href=''>Terms of Sale</a></p>
          <p className='inline-block mr-4'><a href=''>Privacy Statement</a></p>
          <p className='inline-block'><a href=''>Legal & Regulatory</a></p>
          <p className='inline-block ml-4'><a href=''>Accessibility</a></p>
        </div>
      </div>
    </>
  )
}
