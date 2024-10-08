import { image } from 'framer-motion/client';
import React, { useState } from 'react'
import { Navbar } from '../Home component/Navbar';
import { Footer } from '../Home component/Footer';
import { FooterBottom } from '../Contact/Contact';
import { Link } from 'react-router-dom';

const dellProduct = [
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/media-gallery/liquid/desktop-aw-r16-bk-lqd-cooling-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Inspiron Desktop",
      price: 45000,
      rating: 4.3,
      specialOffers: ["10% off on HDFC Bank cards", "Free wired keyboard and mouse"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/27-7730/media-gallery/gray/aio-desktop-inspiron-27-7730-gray-gallery-4-fb.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",  
      name: "Dell XPS Desktop",
      price: 115000,
      rating: 4.6,
      specialOffers: ["No-cost EMI", "1-year McAfee antivirus subscription"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r15-intel/media-gallery/lunar-light-wh-clear-cryo-tech/desktop-alienware-aurora-r15-white-cryo-clear-panel-gallery-4.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell OptiPlex 3080 Micro",
      price: 65000,
      rating: 4.4,
      specialOffers: ["₹5000 off on exchange", "Free shipping"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/vostro-desktops/3030sff/media-gallery/desktop-vostro-3030sff-gn-noodd-gallery-4-500.jpg?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell G5 Gaming Desktop",
      price: 95000,
      rating: 4.5,
      specialOffers: ["Free gaming mouse", "Additional ₹4000 off on exchange"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/alienware-desktops/alienware-aurora-r16/media-gallery/liquid/desktop-aw-r16-bk-lqd-cooling-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Vostro Desktop",
      price: 55000,
      rating: 4.2,
      specialOffers: ["5% cashback on Axis Bank cards", "No-cost EMI for 6 months"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/inspiron-3030-small-desktop-3.png?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Alienware Aurora R12",
      price: 180000,
      rating: 4.8,
      specialOffers: ["Free gaming keyboard", "1-year premium support"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3535-amd/media-gallery/black/notebook-inspiron-15-3535-nt-plastic-black-gallery-12.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Precision 3640 Tower",
      price: 125000,
      rating: 4.7,
      specialOffers: ["5% off on ICICI Bank cards", "Free shipping"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/vostro-desktops/3030sff/media-gallery/desktop-vostro-3030sff-gn-noodd-gallery-4-500.jpg?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Inspiron 3881 Desktop",
      price: 50000,
      rating: 4.3,
      specialOffers: ["₹3000 off on exchange", "No-cost EMI"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/inspiron-3030-small-desktop-3.png?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell G Series Gaming Tower",
      price: 105000,
      rating: 4.6,
      specialOffers: ["10% off on HDFC cards", "Free gaming accessories bundle"]
    },
    {
      image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUZf7VgP7CH0zErMB08W-LxZwNLOBvaDFFJJwcjHzEgXO32K5YRFuzM0jWQ3vIDk5HyrRptu6tAI0wca5Dl-T1TVvuDTH6qw&usqp=CAE",
      name: "Dell OptiPlex 7070 Ultra",
      price: 85000,
      rating: 4.4,
      specialOffers: ["No-cost EMI", "Free shipping"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/inspiron-desktops/24-5430/media-gallery/black/desktop-aio-inspiron-24-5430-wired-black-gallery-4.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Vostro 3681 Compact Desktop",
      price: 43000,
      rating: 4.1,
      specialOffers: ["Exchange offer up to ₹7,000", "Free installation service"]
    },
    {
      image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/desktops/vostro-desktops/3030sff/media-gallery/desktop-vostro-3030sff-gn-noodd-gallery-4-500.jpg?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
      name: "Dell Alienware Aurora R10",
      price: 155000,
      rating: 4.7,
      specialOffers: ["1-year accidental damage cover", "Free gaming mouse"]
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8uv7iqtoMvaw_L00t5ID0IXP2UBLorTfSA&s",
      name: "Dell Precision 5820 Tower",
      price: 210000,
      rating: 4.8,
      specialOffers: ["₹10,000 off on exchange", "Free professional setup service"]
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO9KwKciDzqPgh9Ep2hLiue1FJ5fX9GnDoA&s",
      name: "Dell Inspiron 3880 Desktop",
      price: 47000,
      rating: 4.2,
      specialOffers: ["5% cashback on Axis Bank cards", "Free wireless mouse"]
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiyYbOqTEErlHlHSZRDu4Rm8W-DC0PTh6DA&s",
      name: "Dell OptiPlex 5480 All-in-One",
      price: 97000,
      rating: 4.5,
      specialOffers: ["Additional ₹5000 off on exchange", "Free shipping"]
    },
    {
        image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-mlk/media-gallery/hd/laptop-alienware-m18-r2-hd-perkey-intel-bk-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
        name: "Dell G15 Gaming Laptop",
        price: 95000,
        rating: 4.5,
        specialOffers: ["10% off on ICICI Bank cards", "No-cost EMI available"]
      },
      {
        image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m16-r2-intel/media-gallery/laptop-aw-m16r2-nt-bk-gallery-3.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",  
        name: "Dell Alienware m15 R7",
        price: 175000,
        rating: 4.7,
        specialOffers: ["Free gaming mouse", "1-year accidental damage protection"]
      },
      {
        image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienwar-x16-mlk/gallery/notebook-alienware-x16-r2-gray-gallery-12.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",  
        name: "Dell Inspiron 15 Gaming Edition",
        price: 85000,
        rating: 4.2,
        specialOffers: ["Exchange offer up to ₹15,000", "Free shipping"]
      },
      {
        image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-mlk/media-gallery/hd/laptop-alienware-m18-r2-hd-perkey-intel-bk-gallery-2.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",   
        name: "Dell G5 SE Gaming Laptop",
        price: 105000,
        rating: 4.4,
        specialOffers: ["5% cashback on Axis Bank cards", "Additional ₹5000 off on exchange"]
      },
      {
        image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5535/media-gallery/black/1-zone-coral-kb/notebook-g15-5535-nt-bk-coral-gallery-12.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
        name: "Dell Alienware X17",
        price: 245000,
        rating: 4.8,
        specialOffers: ["2-year premium support", "Free gaming headset"]
      },
      {
          image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/4-zone-rgb-kb/notebook-laptop-g15-5530-gray-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",   
          name: "Dell G5 SE Gaming Laptop",
          price: 105000,
          rating: 4.4,
          specialOffers: ["5% cashback on Axis Bank cards", "Additional ₹5000 off on exchange"]
        },
        {
          image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
          name: "Dell Alienware X17",
          price: 245000,
          rating: 4.8,
          specialOffers: ["2-year premium support", "Free gaming headset"]
        },
        {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dwf/media-gallery/monitor-alienware-aw3423dwf-black-gallery-10.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",  
            name: "Dell UltraSharp U2720Q 27-inch 4K Monitor",
            price: 60000,
            rating: 4.8,
            specialOffers: ["10% off on ICICI Bank cards", "Free HDMI cable"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw2723df/media-gallery/monitor-alienware-aw2723df-white-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
            name: "Dell P2419H 24-inch Full HD Monitor",
            price: 18000,
            rating: 4.5,
            specialOffers: ["₹2000 off on exchange", "Free shipping"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw2725df/media-gallery/monitor-alienware-2725df-black-gallery-1-mg.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
            name: "Dell S3221QS 32-inch Curved 4K Monitor",
            price: 37000,
            rating: 4.6,
            specialOffers: ["No-cost EMI available", "10% off on HDFC Bank cards"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/aw-series/aw3225qf/media-gallery/monitor-alienware-aw3225qf-white-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
            name: "Dell S2721D 27-inch QHD Monitor",
            price: 26000,
            rating: 4.4,
            specialOffers: ["Free HDMI to DisplayPort adapter", "5% cashback on Axis Bank cards"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent//content/dam/images/products/electronics-and-accessories/dell/monitors/dell-gaming/s3422dwg/s3422dwg-xfp-01-bk.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
            name: "Dell Alienware AW2521H 25-inch Gaming Monitor",
            price: 45000,
            rating: 4.9,
            specialOffers: ["Free gaming mousepad", "No-cost EMI"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw2725qf/media-gallery/monitor-alienware-aw2725qf-bk-gallery-1.psd?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500",
            name: "Dell P2719H 27-inch Full HD Monitor",
            price: 22000,
            rating: 4.3,
            specialOffers: ["₹3000 off on exchange", "Free installation"]
          },
          {
            image:"https://wfh.rahisystems.com/pub/media/catalog/product/cache/cac2500229f1abf2749847dddcb7d40d/p/e/peripherals_monitor_p2422h_gallery_1.jpeg",
            name: "Dell U3415W 34-inch Curved Monitor",
            price: 85000,
            rating: 4.7,
            specialOffers: ["Free shipping", "Additional ₹5000 off on exchange"]
          },
          {
            image:"https://d13s5rafcqkqiu.cloudfront.net/CACHE/images/products/other/tba/621468_dell-p-series-p2422h-238-fhd-ips-led-monitor_YaUhbL_1-auto/fcb7cb6d4e8c87d4d7a01aa12d971fdd.jpg",
            name: "Dell S2421HN 24-inch Monitor",
            price: 13000,
            rating: 4.2,
            specialOffers: ["5% cashback on Axis Bank cards", "Free HDMI cable"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YssgFeOYBd4_ZqmR5Tq7Dsv--S8nE6OXTQ&s",
            name: "Dell UltraSharp U3818DW 38-inch Curved Monitor",
            price: 105000,
            rating: 4.8,
            specialOffers: ["Free wireless mouse", "1-year premium support"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdmQ7h9A5tX2A-rE91JK44QQFOcVYBLdOfA&s",
            name: "Dell P3221D 32-inch QHD Monitor",
            price: 42000,
            rating: 4.5,
            specialOffers: ["No-cost EMI", "₹5000 off on exchange"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_0e_6sJl4UCHpMhekC0MgkZmZRj4dj1UADDiGIhFEVSoGb0m_cWAfEaYYy5pM67faX8&usqp=CAU",
            name: "Dell SE2419HR 24-inch Monitor",
            price: 12000,
            rating: 4.2,
            specialOffers: ["Free installation", "No-cost EMI for 6 months"]
          },
          {
            image:"https://www.buyitdirect.ie/Images/DELL-U3423WE_1_Supersize.jpg?v=3",
            name: "Dell S2721HS 27-inch Full HD Monitor",
            price: 19000,
            rating: 4.3,
            specialOffers: ["10% off on HDFC Bank cards", "Free HDMI cable"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u3824dw/media-gallery/monitor-u3824dw-gray-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3381&hei=2963&qlt=100,1&resMode=sharp2&size=3381,2963&chrss=full&imwidth=5000",
            name: "Dell UltraSharp U2721DE 27-inch QHD Monitor",
            price: 55000,
            rating: 4.6,
            specialOffers: ["Free shipping", "5% cashback on Axis Bank cards"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u4924dw/media-gallery/monitor-u4924dw-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1144&qlt=100,1&resMode=sharp2&size=1144,804&chrss=full",
            name: "Dell E2720HS 27-inch Full HD Monitor",
            price: 16000,
            rating: 4.1,
            specialOffers: ["Exchange offer up to ₹2000", "Free installation"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ojj3h9tcuNA-DrAFsLXvrjOMmq_XQy87oPYwZX7ZYysdhbSXQtRrG4ImKRsocT60H_8&usqp=CAU",
            name: "Dell S3220DGF 32-inch Curved Gaming Monitor",
            price: 55000,
            rating: 4.7,
            specialOffers: ["Free gaming headset", "₹4000 off on exchange"]
          },
          {
            image:"https://www.tpstech.in/cdn/shop/products/1_70d98f91-2a64-49a0-bbaf-5886e217cd4a.jpg?v=1608628918",
            name: "Dell KM636 Wireless Keyboard and Mouse Combo",
            price: 2000,
            rating: 4.4,
            specialOffers: ["10% off on ICICI Bank cards", "Free shipping"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRwNzlorWZswPuayd9EA-L-eUe4Wi7dZOaA&s",
            name: "Dell WD19TB Thunderbolt Dock",
            price: 18000,
            rating: 4.6,
            specialOffers: ["No-cost EMI", "₹2000 off on exchange"]
          },
          {
            image:"https://m.media-amazon.com/images/I/41irBCCSGJS._AC_UF1000,1000_QL80_.jpg",
            name: "Dell AE215 Stereo Soundbar",
            price: 2500,
            rating: 4.3,
            specialOffers: ["Free shipping", "5% cashback on HDFC Bank cards"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsvlTopb_NfAh89Xw7SuQDXk3xG8LQKVShQ&s",
            name: "Dell D6000 Universal Dock",
            price: 13000,
            rating: 4.5,
            specialOffers: ["₹1000 off on exchange", "No-cost EMI"]
          },
          {
            image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/electronics-software-and-accessories/accessories/dell/carrying-case/ecoloop-pro-slim-briefcase-cc5624s/media-gallery/en/carrying-case-briefcase-ecoloop-cc5624s-gallery-2-en.psd?fmt=pjpg&pscan=auto&scl=1&wid=4005&hei=4454&qlt=100,1&resMode=sharp2&size=4005,4454&chrss=full&imwidth=5000",
            name: "Dell Pro Briefcase 15",
            price: 3500,
            rating: 4.4,
            specialOffers: ["Free shipping", "10% off on Axis Bank cards"]
          },
          {
            image:"https://m.media-amazon.com/images/I/71hKuxDtcRL._AC_UF1000,1000_QL80_.jpg",
            name: "Dell Premier Wireless Mouse - WM527",
            price: 1800,
            rating: 4.2,
            specialOffers: ["5% cashback on ICICI Bank cards", "Free mousepad"]
          },
          {
            image:"https://www.westcoast.co.uk/Images/Product/Default/medium/58511528_7749891042.jpg",
            name: "Dell Dual Monitor Stand - MDS19",
            price: 12000,
            rating: 4.6,
            specialOffers: ["Free installation", "₹2000 off on exchange"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFbgv6e0P_CsMOWNzef5Y-x2RxDnyRCRayUg&s",
            name: "Dell Portable SSD, 1TB",
            price: 8500,
            rating: 4.7,
            specialOffers: ["Free carrying case", "5% off on Axis Bank cards"]
          },
          {
            image:"https://5.imimg.com/data5/SELLER/Default/2020/11/IU/XE/UC/117802970/western-digital-500x500.PNG",
            name: "Dell USB-C Mobile Adapter - DA300",
            price: 7000,
            rating: 4.5,
            specialOffers: ["No-cost EMI", "Free shipping"]
          },
          {
            image:"https://m.media-amazon.com/images/I/712TaM-9wYL.jpg",
            name: "Dell Alienware Gaming Headset - AW510H",
            price: 8000,
            rating: 4.6,
            specialOffers: ["10% off on HDFC Bank cards", "Free gaming mousepad"]
          },
          {
            image:"https://rukminim2.flixcart.com/image/850/1000/l0pm3680/stylus/k/e/k/premium-active-wireless-pen-pn579x-pn579x-dell-original-imagcfz9ph7vyqjz.jpeg?q=90&crop=false",
            name: "Dell Premium Active Pen - PN579X",
            price: 5000,
            rating: 4.3,
            specialOffers: ["Free stylus case", "₹1000 off on exchange"]
          },
          {
            image:"https://www.wmart.co.in/wp-content/uploads/2022/04/41KEMSRe-vL.jpg",
            name: "Dell Slim Power Adapter - 90W",
            price: 3500,
            rating: 4.4,
            specialOffers: ["5% cashback on Axis Bank cards", "Free shipping"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTC0UkBmkX2fxSRaKJHx8Tj277QaDRz1bv3Q&s",
            name: "Dell Premier Backpack 15",
            price: 4000,
            rating: 4.5,
            specialOffers: ["10% off on ICICI Bank cards", "Free water bottle"]
          },
          {
            image:"https://m.media-amazon.com/images/I/717RvAiIy1L._AC_UF1000,1000_QL80_.jpg",
            name: "Dell Bluetooth Travel Mouse - WM615",
            price: 2800,
            rating: 4.3,
            specialOffers: ["₹500 off on exchange", "Free mousepad"]
          },
          {
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8iny8G0U6EalOp-Tsz827xrK5IXI0MvC3w&s",
            name: "Dell USB Soundbar - AC511M",
            price: 1500,
            rating: 4.1,
            specialOffers: ["Free shipping", "5% off on HDFC Bank cards"]
          }
    
  ];
  

  export const Desktops = () => {

    const [filteredList, setfilteredList] = useState(dellProduct); 
    const [searchQuery, setSearchQuery] = useState(""); 
  
    // Search handler
    const handleSearch = (event) => {
      const query = event.target.value;  // Get the input value
      setSearchQuery(query);  // Set the search query state
  
      // Filter the product list based on the search query
      const searchList = dellProduct.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase());  // Case-insensitive search
      });
      
      setfilteredList(searchList);  // Update the filtered list state with the search result
    };
  
    return (
      <>
      <div>
        <div className='w-full pl-5'>
        <Link to='/'><button className='py1 px-3 bg-blue-400 rounded-md text-white mt-2'><i class="ri-arrow-left-circle-fill"></i> Home</button></Link>
        </div>
        <div className='flex w-full justify-center m-5 items-center gap-5'>
          {/* Search Input */}
          <div className='w-1/2 border'>
            <input 
              onChange={handleSearch} 
              className='w-full p-2' 
              type="text" 
              name='search' 
              placeholder='Search Laptop' 
              value={searchQuery} 
            />
          </div>
          </div>
  
          {/* Display filtered product list */}
          <div className='grid grid-cols-4 gap-4 m-5'>
          {filteredList.map((item, index) => (
            <div key={index}>
              <div className='border rounded p-2'>
                <div className='flex mb-4 justify-center h-[200px]'>
                  <img className='h-[200px]' src={item.image} alt={item.name} />
                </div>
                <p className='font-bold'>{item.name}</p>
                <p><b>$</b>{item.price}</p>
                <div className='flex items-center'>
                  <p>{item.rating}</p>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p>{item.specialOffers}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        
        <Footer />
        <FooterBottom />
      </>
    )
  }
  