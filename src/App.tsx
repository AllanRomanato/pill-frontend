import React from 'react';
import './App.css';
import ProductInfoComponent from './component/product.component';


function App() {
    const searchParams = new URLSearchParams(window.location.search);
    const apiUrl = searchParams.get('url') || '';
  return (
      <div>
        <ProductInfoComponent url={apiUrl} />
      </div>
  );
}

export default App;
