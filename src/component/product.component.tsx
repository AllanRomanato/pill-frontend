import React, { useState, useEffect } from 'react';
import ProductService from '../service/product.service';
import { ProductInfo, NotFoundResponse } from '../model/info.model';

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

    return (
        <div>
            {productInfo !== null && (
            <>
                {('productName' in productInfo) ? (
                <>
                    <h2>{productInfo.productName}</h2>
                <img src={productInfo.productImage} alt={productInfo.productName} />
    <p>GTIN-13: {productInfo.gtin13}</p>
    <p>Brand: {productInfo.brand}</p>
    <p>Price: {productInfo.price}</p>
    </>
) : (
        <p>{productInfo.message}</p>
    )}
    </>
)}
    </div>
);
};

export default ProductInfoComponent;
