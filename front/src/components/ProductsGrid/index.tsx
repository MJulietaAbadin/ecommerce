import { IProduct, IProductsGridProps } from '@/interfaces/interfaces';
import React from 'react';
import ProductCard from '../ProductCard';
import Title from '../Title';

export default function ProductsGrid({ products, title }: IProductsGridProps) {
  return (
    <div className="flex flex-col items-center pb-9">
      <div className="mb-5 w-2/3 text-left mt-16">
        <Title title={title} />
      </div>
      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
