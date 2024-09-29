import React, { useState } from 'react'
import {createContext} from 'react'

export const Products = createContext() 

const Context = ({children}) => {
    const [data,setData]=useState({
        iphone: [
          {
            id: 1,
            productName: 'iPhone 16 Pro',
            price: 119900.00,
            productImage: 'https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_16pro__erw9alves2qa_large.png',
            desc: 'The ultimate'
          },
          {
            id: 2,
            productName: 'iPhone 16',
            price: 79900.00,
            productImage: 'https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_16__c5bvots96jee_large.png',
            desc: 'A total powerhouse'
          },
          {
            id: 3,
            productName: 'iPhone 15',
            price: 69900.00,
            productImage: 'https://www.apple.com/v/iphone/home/bw/images/overview/select/iphone_15__buwagff0mwwi_large.png',
            desc: 'A total powerhouse'
          }
        ],
        mac: [
          {
            id: 4,
            productName: 'MacBook Air 13” and 15”',
            price: 99900.00,
            productImage: 'https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png',
            desc: 'Strikingly thin and fast so you can work, play or create anywhere.'
          },
          {
            id: 5,
            productName: 'MacBook Pro 14” and 16”',
            price: 169900.00,
            productImage: 'https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png',
            desc: 'The most advanced Mac laptops for demanding workflows.'
          }
        ],
        ipad: [
          {
            id: 6,
            productName: 'iPad Pro',
            price: 99900.00,
            productImage: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_large.png',
            desc: 'The ultimate iPad experience with the most advanced technology.'
          },
          {
            id: 7,
            productName: 'iPad Air',
            price: 59900.00,
            productImage: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_air__cr381zljqdiu_large.png',
            desc: 'Serious performance in a thin and light design.'
          },
          {
            id: 8,
            productName: 'iPad',
            price: 34900.00,
            productImage: 'https://www.apple.com/v/ipad/home/ck/images/overview/select/product-tile/pt_ipad_10th_gen__ej5p5x6yf2gm_large.png',
            desc: 'The colourful, all‑screen iPad for the things you do every day.'
          }
        ],
        watch: [
          {
            id: 9,
            productName: 'Apple Watch SE',
            price: 24900.00,
            productImage: 'https://www.apple.com/v/watch/bo/images/overview/select/product_se__frx4hb13romm_large.png',
            desc: 'All the essentials. Light on price.'
          },
          {
            id: 10,
            productName: 'Apple Watch Series 10',
            price: 46900.00,
            productImage: 'https://www.apple.com/v/watch/bo/images/overview/select/product_s10__deak4mdempoy_large.png',
            desc: 'Thinnest. Biggest display. Advanced health features.'
          }
        ]      
    })
  return ( <Products.Provider value={{data}}>
    {children}
  </Products.Provider> )
}

export default Context




