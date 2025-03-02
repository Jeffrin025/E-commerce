import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addtocart } = useContext(CartContext);

  // Debugging logs
  console.log('Products:', products);
  console.log('Product ID from URL:', id);

  // Check if products is undefined or empty
  if (!products || products.length === 0) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <p>Loading products...</p>
      </section>
    );
  }

  // Find the product by ID
  const product = products.find((item) => item.id === Number(id));

  // If product is not found
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <p>Product not found.</p>
      </section>
    );
  }

  // Destructure product details
  const { title, price, description, image } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          
          {/* Product Image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt={title} />
          </div>

          {/* Product Details */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className='mb-6 text-xl text-red-500 font-medium'>₹{price}</div>
            <p className='mb-8'>{description}</p>
            <button
              onClick={() => addtocart(product, product.id)}
              className='bg-primary py-4 px-8 text-white'
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
