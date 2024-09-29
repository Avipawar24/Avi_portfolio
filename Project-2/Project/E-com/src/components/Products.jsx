import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

export const Maincard = ({ product1 }) => {
  const { image, productname, description } = product1;
  return (
    <>
      <div className="main-card">
        <div className="main-card-image">
          <img src={image} alt="" />
        </div>
        <div className="main-card-bottom">
          <h2>{productname}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
export const Minicard = ({data}) => {
    const {title,price,image} = data
  return (
    <>
      <div className="mini-card">
        <div className="mini-card-image">
          <img src={image} alt="" />
        </div>
        <div className="mini-card-details">
          <h5>{price}</h5>
          <p>{title}</p>
          <div className="add-cart-btn">
            <button>Add to cart</button>
            </div>
        </div>
      </div>
    </>
  );
};

export const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async() => {
      let api = `https://fakestoreapi.com/products?_page=1&limit=6`;
      return await axios.get(api).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    };
    getData();
  }, []);
  const product1 = {
    image:
      "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZlbWFsZSUyMGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
    productname: "The fall edit",
    description:
      "Take your look to the next level with elevated basics & statement layers.",
  };
  const product2 = {
    image:
      "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVjb3J8ZW58MHx8MHx8fDA%3D",
    productname: "Decor we're falling for",
    description: "Get inspired & bring home the season's best of the best.",
  };
  const product3 = {
    image:
      "https://images.unsplash.com/photo-1598460880248-71ec6d2d582b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zbWV0aWNzfGVufDB8fDB8fHww",
    productname: "Fall beauty trends",
    description: "Hair, skin & makeup must-haves for a new season of galm.",
  };
  return (
    <>
      <div className="products">
        <h5 className="heading">That fall feeling</h5>
        <div className="main-card-container">
          <Maincard product1={product1} />
          <Maincard product1={product2} />
          <Maincard product1={product3} />
        </div>
        <div className="mini-cards">
          <h1>Fall favorites under $5</h1>
          <div className="mini-card-list">
            {data.map((item,index)=>{
                return <Minicard key={index} data={item}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};
