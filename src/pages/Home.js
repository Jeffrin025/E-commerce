import React,{useContext} from 'react';
import Product from '../components/Product'
import { ProductContext } from '../contexts/ProductContext';
import Hero from '../components/Hero';
const Home = () => {
  const {products}= useContext(ProductContext);
  const filterProducts = products.filter((item)=>{
    return(
      item.category=="men's clothing" || item.category==="women's clothing"
    )
  })
  return(<div>
    <Hero/>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm m-auto md:max-w-none md:mx-0'>
          {filterProducts.map(products=>{
            return <Product product={products} key={products.id}/>
          })}
        </div>
      </div>
    </section>
  </div>)
 
};

export default Home;
