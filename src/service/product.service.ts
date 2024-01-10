import { ProductInfo, NotFoundResponse } from '../model/info.model';

class ProductService {
    async getProductInfo(url: string): Promise<ProductInfo | NotFoundResponse> {
        try {
            const response = await fetch(`http://localhost:4200/api/product?url=${url}`);
            if (response.status === 200) {
                const data = await response.json();
                return data as ProductInfo;
            } else if (response.status === 404) {
                const data = await response.json();
                return data as NotFoundResponse;
            } else {
                // Handle other HTTP status codes as needed
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        } catch (error) {
            console.error('Error fetching product information:', error);
            throw error;
        }
    }
}

export default ProductService;
