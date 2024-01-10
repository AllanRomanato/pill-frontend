interface ProductInfo {
    productName: string;
    productImage: string;
    gtin13: string;
    brand: string;
    price: string;
}

interface NotFoundResponse {
    message: string;
}

export type { ProductInfo, NotFoundResponse };