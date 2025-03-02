import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdAdd, IoMdRemove } from 'react-icons/io';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="flex gap-x-4 py-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full flex items-center gap-x-4">
        {/* Product Image */}
        <Link to={`/products/${id}`} className="flex-shrink-0">
          <img className="w-[80px] h-auto object-contain" src={image} alt={title} />
        </Link>

        {/* Product Details */}
        <div className="w-full flex flex-col">
          {/* Title & Remove Button */}
          <div className="flex justify-between items-center mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/products/${id}`}
            >
              {title}
            </Link>
            <button
              className="text-xl text-gray-500 hover:text-red-500 transition"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose />
            </button>
          </div>

      
          <div className="flex items-center gap-x-4">
   
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                className="p-2 text-lg text-gray-700 hover:bg-gray-200 transition"
                onClick={() => decreaseQuantity(id)}
              >
                <IoMdRemove />
              </button>
              <span className="px-4 py-1 text-base">{amount}</span>
              <button
                className="p-2 text-lg text-gray-700 hover:bg-gray-200 transition"
                onClick={() => increaseQuantity(id)}
              >
                <IoMdAdd />
              </button>
            </div>

            {/* Individual Price */}
            <div className="text-gray-700 text-base font-semibold">${price.toFixed(2)}</div>

            {/* Total Price */}
            <div className="ml-auto text-primary font-semibold text-base">
              ${`${(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
