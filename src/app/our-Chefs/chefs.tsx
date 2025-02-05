"use client";

import Link from "next/link";
import Image from "next/image";
import upper from "../assets/upper.png";
import { Chef } from "../../../types/product";
import { allChefs } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const Chefs = () => {
  const [product, setProduct] = useState<Chef[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Chef[] = await client.fetch(allChefs);
      setProduct(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            Our Chef
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <Link href="/" className="text-white">
              Home
            </Link>
            <span className="text-white"> &gt; </span>
            <Link href="/About" className="text-orange-500">
              Chef
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-white py-16 px-5 grid grid-cols-4 gap-4">
  {product.map((product) => (
    <div key={product.name || product.specialty} className="border p-4 justify-items-center">
      <div className="font-bold">{product.name || "No Name Available"}</div>
      <div>{product.position}</div>
      <div>{product.experience}</div>
      <div className="mb-2">{product.specialty}</div>
      <div>
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt="image"
            width={200}
            height={200}
          />
        )}
      </div>
      <div className="mt-2">{product.description}</div>
      <div>{product.available ? "Available" : "Not Available"}</div>
    </div>
  ))}
</section>

    </div>
  );
};
export default Chefs;
