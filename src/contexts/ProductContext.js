import React,{ createContext,useState,useEffect, Children} from 'react';

export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  const [products, setproducts] = useState([]);

  useEffect(()=>{
    const fetcProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      setproducts(data)

    };
    fetcProducts();
    

  },[])

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;
