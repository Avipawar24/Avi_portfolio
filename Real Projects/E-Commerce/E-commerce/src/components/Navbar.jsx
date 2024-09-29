import React from "react";
import { Link} from "react-router-dom";
import Iphone from './Iphone'
import Mac from "./Mac";

const Navbar = () => {
  return (
    <div className="">
      <div className="links w-full py-4 flex text-white bg-black justify-between gap-5 font-medium">
      <div className="flex gap-5 ml-5">
        <Link to='/'><i className="ri-apple-fill"></i></Link>
        <Link to='/iphone'>iPhone</Link>
        <Link to='/mac'>Mac</Link>
        <Link to='watch'>Watch</Link>
        <Link to='ipad'>iPad</Link>
      </div>
      <div className="flex gap-3">
      <Link className="hover:font-bold" to="/">
          Store
        </Link>
        <Link className="mr-4 hover:font-bold" to="/cart">
        <i className="ri-shopping-bag-4-fill"></i>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
