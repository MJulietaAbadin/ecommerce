import Button from "@/components/Button";
import bodysuits from "@/helpers";
import { notFoundIcon } from "@/helpers/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const product = bodysuits.find(
    (bodysuit) => bodysuit.id === Number(params.slug)
  );
  if (!product) {
    return (
      <div className="pt-16 h-screen w-screen flex flex-col justify-center items-center ">
        {notFoundIcon}
        <h2 className="text-3xl">Product not found</h2>
        <Link href="/home" className="text-zinc-800">
          Click here to return to the home page
        </Link>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center pt-32 pb-16">
      <div className="flex flex-col items-center w-[300px] sm:w-[400px] md:w-[500px]  lg:w-8/12 lg:flex-row lg:justify-center">
        <div className="relative object-contain h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:h-[500px] md:w-[500px] lg:w-[300px] lg:h-[300px]">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
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
          <Button href="/cart" content="ADD TO CART" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

/* <div className="bg-fuchsia-600 pb-10  flex flex-col items-center justify-center h-screen pt-16 lg:flex-row">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-11/12 lg:flex-row ">
                {product.image && (
                    <div className="bg-fuchsia-400 relative object-contain h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] lg:h-[400px] lg:w-[400px] ">
                        <Image
                        src={product.image}
                        alt={product.name}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px)50vw, 33vw"
                        priority={true}
                        /> 
                    </div>
                )}
                <div className="lg: w-1/2">
                <div className="text-center lg:flex-row bg-fuchsia-500">
                <h2 className="font-bold pt-5">{product?.name}</h2>
                <p className="font-bold text-2xl">${product?.price}</p>
            </div>
                <h4 className=" pt-5 font-semibold ">DETAILS: </h4>
                <p className="text-justify">{product?.description}</p>
            <p className="font-semibold pb-5">Stock: {product?.stock}u</p>
                </div>
            
            </div>
            <Button href="/cart" content="ADD TO CART" />
        </div> */
