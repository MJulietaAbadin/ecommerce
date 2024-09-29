import { fetchProducts } from '@/lib/server/fetchProducts'
import ProductsGrid from '@/components/ProductsGrid'
import { IProduct } from '@/interfaces/interfaces'
import Title from '@/components/Title'
import Carousel from '@/components/Carousel'
export default async function Home() {
  const products = await fetchProducts()
  return (
    <div className='mt-16'>
        <Carousel/>
        <ProductsGrid products={products} title='Products'/>
    </div>
  )
}

