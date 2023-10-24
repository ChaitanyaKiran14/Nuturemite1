import React, { useState, useEffect } from 'react';
const productList  = []
const FetchedProducts = () => {
    const [productList, setProductList] = useState([]);
  
    const fetchProductData = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setProductList(data);
        } else {
          console.error('Failed to fetch product data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    useEffect(() => {
      fetchProductData();
    }, []);
  
    return (
      <div className="app">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
};
export default FetchedProducts
