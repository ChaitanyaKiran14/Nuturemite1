import React, { useState, useEffect } from 'react';
import AllProducts from '../AllProducts'
import FetchedProducts from '../FetchedProducts';

import './index.css'
const Products = () => (
    <div className="not-found">
      <h1>ALL PRODUCTS</h1>
      <AllProducts />
      <FetchedProducts />
    </div>
  )
  export default Products