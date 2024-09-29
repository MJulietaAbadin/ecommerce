import { IProduct } from "@/interfaces/interfaces";
import { fetchProducts } from "@/lib/server/fetchProducts";

export async function getProductsByCategory(categoryId: string) {
    try {
        const products: IProduct[] = await fetchProducts();
        const productsFiltered = products.filter((product) => product.categoryId.toString() === categoryId);
        
        if (productsFiltered.length === 0) {
            throw new Error('No products found for the given category');
        }
        
        return productsFiltered;
    } catch (error) {
        console.log(error);
        return []; 
    }
}
