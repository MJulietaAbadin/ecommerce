import { fetchProductById } from '@/lib/server/fetchProducts';
import { notFoundIcon } from '@/helpers/icons';
import Link from 'next/link';
import Image from 'next/image';
import AddToCart from '@/components/AddToCart';
import { IProduct } from '@/interfaces/interfaces';

export default async function Detail({params}: {params: { slug: string };
  }) {
    const product : IProduct | null = await fetchProductById(params.slug);
    if (!product) {
        return (
          <div className="pt-16 h-screen w-screen flex flex-col justify-center items-center text-white ">
            {notFoundIcon}
            <h2 className="text-3xl ">Product not found</h2>
            <Link href="/home" className="text-zinc-800 text-pageColor">
              Click here to return to the home page
            </Link>
          </div>
        );
      }
      return (
        <section className="flex justify-center p-6 pt-20">
          <div className="flex max-w-5xl w-full rounded-lg shadow-lg overflow-hidden justify-center items-center">
            {/* Contenedor de la imagen */}
           
              {product?.image && (
                <img className="relative h-[300px] w-auto sm:w-auto sm:h-[400px] md:h-[500px] md:w-auto lg:w-auto lg:h-[300px]" src={product.image}/>
                
              )}
          
      
            {/* Contenedor de la información del producto */}
            <div className="flex flex-col justify-between text-white ml-4 w-1/2 p-4">
              <h2 className="text-3xl font-bold">{product?.name}</h2>
              <p className="text-xl font-semibold ">${product?.price}</p>
              <div className="mt-2">
                <h4 className="text-lg font-semibold border-b-2 border-pageColorHover text-pageColor pb-1">DETAILS:</h4>
                <p className="mt-2">{product?.description}</p>
                <p className="mt-1">Stock: <span className="font-semibold">{product?.stock}u</span></p>
              </div>
              
              {/* Botón de agregar al carrito */}
              <div className="mt-4">
                <AddToCart id={product.id}  />
              </div>
            </div>
          </div>
        </section>
      );
      
      
      
      
}

/*  <div className="relative h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px]"> */
/*  <div className="relative h-[300px] w-auto sm:w-auto sm:h-[400px] md:h-[500px] md:w-auto lg:w-auto lg:h-[300px]"> */

/* <Image
                  src={product?.image}
                  alt={product?.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                /> */
/* <section className="flex flex-col items-center pt-32 pb-16 text-white">
      <div className="flex flex-col items-center w-[300px] sm:w-[400px] md:w-[500px]  lg:w-8/12 lg:flex-row lg:justify-center">
        <div className="relative object-contain h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px]">
          {product?.image && (
            <Image
              src={product?.image}
              alt={product?.name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw"
              priority={true}
            />
          )}
        </div>
        
        <div className="text-center lg:w-3/5 lg:flex lg:items-center lg:flex-col">
          <h2 className="font-bold pt-5">{product?.name}</h2>
          <p className="font-bold text-2xl">${product?.price}</p>
          <div className="text-start lg:w-8/12">
            <h4 className="pt-5 font-semibold">DETAILS:</h4>
            <p className="text-justify">{product?.description}</p>
            <p className="font-semibold pb-5">Stock: {product?.stock}u</p>
          </div>
          <div className="flex justify-center">
          <AddToCart id={product.id}/>
          </div>
          
        </div>
      </div>
    </section> */


/* return (
  <section className="bg-gray-900 p-8">
    <div className="max-w-3xl mx-auto flex flex-col items-center">
      <div className="relative object-contain h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px] mb-6">
        {product?.image && (
          <Image
            src={product?.image}
            alt={product?.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="rounded-lg shadow-lg"
          />
        )}
      </div>
      
      <div className="text-white text-center">
        <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
        <p className="text-xl font-semibold mb-4">${product?.price}</p>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-2">DETAILS:</h4>
          <p className="mb-2">{product?.description}</p>
          <p className="text-sm">Stock: <span className="font-bold">{product?.stock} u</span></p>
        </div>
        <div className="mt-4">
          <AddToCart id={product.id} />
        </div>
      </div>
    </div>
  </section>
);
 */

/* return (
  <section className="">
    <div className="">
      <div className="relative object-contain h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px]">
        {product?.image && (
          <Image
            src={product?.image}
            alt={product?.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw"
            priority={true}
          />
        )}
      </div>
      
      <div className="text-white">
        <h2 className="">{product?.name}</h2>
        <p className="">${product?.price}</p>
        <div className="">
          <h4 className="">DETAILS:</h4>
          <p className="">{product?.description}</p>
          <p className="">Stock: {product?.stock}u</p>
        </div>
        <div className="">
        <AddToCart id={product.id}/>
        </div>
        
      </div>
    </div>
  </section>
)
 */

/* return (
        <section className="pt-20 p-8 flex flex-col justify-center items-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="relative object-contain h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px] mb-6">
              {product?.image && (
                <Image
                  src={product?.image}
                  alt={product?.name}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={true}
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
            
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
              <p className="text-xl font-semibold mb-4 ">${product?.price}</p>
              <div className='w-screen flex justify-center items-center flex-col '>
                <div className="bg-gray-900 bg-opacity-50 p-4  rounded-lg shadow-md w-[700px]">
                  <h4 className="text-lg font-semibold mb-2 ">DETAILS:</h4>
                  <p className="mb-2">{product?.description}</p>
                  <p className="text-sm text-pageColor">Stock: <span className="font-bold">{product?.stock} u</span></p>
                </div>
              </div>
              <div className="mt-4">
                <AddToCart id={product.id} />
              </div>
            </div>
          </div>
        </section>
      );
       */