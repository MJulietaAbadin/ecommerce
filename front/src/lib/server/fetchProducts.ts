import { IProduct } from "@/interfaces/interfaces";

export async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5001/products', {
            method: 'GET', 
            headers: {
              'Cache-Control': 'no-cache', 
            }
        });
        const products = await response.json();
        return products
    } catch (error) {
        console.log(error)
    }
}

export async function fetchProductById(id: string): Promise<IProduct | null> {
    try {
        const response = await fetch(`http://localhost:5001/products/${id}`);
        if (!response.ok) {
            console.error(`Failed to fetch product. Status: ${response.status}`);
            throw new Error('Product not found or API request failed');
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error fetching product:', error);
        return null;
    }
}
