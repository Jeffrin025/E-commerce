import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const { addtocart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="w-full">
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition bg-white flex flex-col justify-between">
        <div className="w-full h-[75%] flex justify-center items-center p-4">
          <img
            className="max-h-[160px] transition duration-300 group-hover:scale-110"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute top-6 right-6 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-4">
          <button onClick={() => addtocart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 hover:bg-red-600 transition">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/products/${id}`}
            className="w-12 h-12 bg-red-300 flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="text-sm capitalize text-gray-500 text-center">
        <div>{category}</div>
        <Link to={`/products/${id}`} className="block">
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
