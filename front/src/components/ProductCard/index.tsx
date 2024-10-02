import { IProductcardProps } from "@/interfaces/interfaces";
import React from "react";
import Link from "next/link";
import Button from "../Button";

export default function ProductCard({ product }: IProductcardProps) {
  return (
    <div className=" text-white bg-gray-900 w-64 h-[380px] rounded-3xl flex items-center justify-center flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800">
      <div className="flex flex-col items-center">
        <h2 className="text-center pb-3 font-semibold">{product.name}</h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-40 md:w-auto md:h-48 lg:w-auto lg:h-48 rounded-md transition-transform duration-300 hover:scale-110"
        />
        <p className="text-center font-semibold py-3">${product.price}</p>
        <Link
          className="flex justify-center"
          key={product.id}
          href={`/detail/${product.id}`}
        >
          <Button content="See more" />
        </Link>
      </div>
    </div>
  );
}

/* <div className=''>
          <h2 className=''>{product.name}</h2>
        <div className='relative object-contain w-56 h-56 md:w-60 md:h-60 lg:w-64 lg:h-64'>
        <Image  
          src={product.image} 
          alt={product.name}
          fill={true}
          sizes="(max-width: 768px) 100vh, (max-width: 1200px) 50vw, 33vw"
          priority={true}/>
        </div>
          <p className=''>${product.price}</p>
        <Link key={product.id} href={`/detail/${product.id}`}>
        <Button content='See more'/>
    </Link>
      </div> */
