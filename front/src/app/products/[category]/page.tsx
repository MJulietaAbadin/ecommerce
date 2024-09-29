import ProductsGrid from '@/components/ProductsGrid'
import { categoriesToPreload } from '@/helpers/categories'
import { getProductsByCategory } from '@/helpers/products.helpers'
import React from 'react'

export default async function Categories({ params }: { params: { category: string } }) {
    const { category } = params;
    const products = await getProductsByCategory(category);
    
    // Filtrar el nombre de la categoría basándote en el ID
    const categoryData = categoriesToPreload.find((categoryId) => categoryId.id.toString() === category);
    
    // Si se encuentra la categoría, obtén su nombre, de lo contrario establece un valor predeterminado
    const title = categoryData ? categoryData.name : "Categoría no encontrada";

    return (
        <div>
            <ProductsGrid products={products} title={title} />
        </div>
    );
}
