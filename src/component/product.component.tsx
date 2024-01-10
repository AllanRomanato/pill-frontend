import React, { useState, useEffect } from 'react';
import ProductService from '../service/product.service';
import { ProductInfo, NotFoundResponse } from '../model/info.model';
import './product.component.css';

interface ProductInfoProps {
    url: string;
}

const ProductInfoComponent: React.FC<ProductInfoProps> = ({ url }) => {
    const [productInfo, setProductInfo] = useState<ProductInfo | NotFoundResponse | null>(null);

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductInfo(url)
            .then((data) => setProductInfo(data))
            .catch((error) => console.error('Error:', error));
    }, [url]);

    return(
        <div className="container">
            <header>
                <img src="https://pill.com.br/cdn/shop/t/51/assets/header-union.svg?v=4551551774730843711689454729" alt="Logo" className="hlogo" />
            </header>
            {productInfo !== null && (
                <>
                {('productName' in productInfo) ? (
                <div className="main-content">
                    <div className="left-section">
                        <img src={productInfo.productImage} alt={productInfo.productName} className="left-image" />
                    </div>

                    <div className="right-section">
                        <p><b>{productInfo.productName}</b></p>
                        <p>{productInfo.gtin13}</p>
                        <p>R${productInfo.price}</p>
                        <p>{productInfo.brand}</p>
                    </div>
                </div>
                ) : (
                    <div className="centered-image-container">
                        <img src="https://pill.com.br/cdn/shop/t/51/assets/header-union.svg?v=4551551774730843711689454729" alt="Left Image" className="centered-image" />
                        <p>{productInfo.message}</p>
                    </div>
                    )}
                </>
            )}
            <footer>
                <img src="https://pill.com.br/cdn/shop/t/51/assets/header-union.svg?v=4551551774730843711689454729" alt="Footer Logo" className="flogo" />
            </footer>
        </div>
    );
};

export default ProductInfoComponent;
