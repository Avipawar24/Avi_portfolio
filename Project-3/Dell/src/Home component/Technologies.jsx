import React from 'react'

const technologies=[
    {
   image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/071724-dt-forum-480x360.jpg/?wid=480&hei=360",
   para:"Harness the full potential of AI at Dell Technologies Forum",
   btn:"Resgister northwesta"
    },
    {
    image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/non-product-images/lifestyle/gettyimages-1182617831-pr7530t-480x360.jpg?wid=480&hei=360",
    para:"Four Keys to Optimal Outcomes with Generative AI",
    btn:"Learn More",
    },
    {
    image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/031424-tl-data-dna-480x360.jpg?wid=480&hei=360",
    para:"Building Your Innovation Muscle in the Era of AI",
    btn:"Read Reportarr",
    },
    {
    image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/hp-banner-esg-480x360-jpg.jpg?wid=480&hei=360",
    para:"Our Purpose in Action",
    btn:"Read the reportarro",
    }
]

export const Technologies = (tech) => {
    const {image,para,btn} = tech;
  return (
   <>
    {technologies.map(()=>{
        <div className='w-[30%] mr-4 bg-[#00172f]'>
          <div>
            <img src={image}/>
          </div>
          <div className='h-[50px] ml-[4px]'>
          <p>{para}</p>
          </div>
          <div className='ml-[4px] flex items-center mb-[8px]'>
            <button>{btn}</button>
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </div>
        </div>
    })}
   </>
  )
}
