"use client";
import React, { useEffect, useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import Image from "next/image";
import Shopnow from "@/app/assets/shopnow.png";
import Side from "@/app/assets/side.png";
import upper from "../assets/upper.png";
import Link from "next/link";
import { Food } from "../../../types/product";
import { allfoods } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const OurShop = () => {
  const [product, setProduct] = useState<Food[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Food[] = await client.fetch(allfoods);
      setProduct(fetchedProducts);
    }
    fetchProducts();
  }, []);

  const Sidebar = () => {
    return (
      <aside className="w-96 bg-white text-black p-4 rounded-lg">
        {/* Search Bar */}
        <div className="relative">
          <div className="relative w-full bg-orange-100 flex items-center ">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-transparent text-gray-700 placeholder-black w-full outline-none px-4"
            />
            <Search className="text-white bg-orange-500 px-2" size={50} />
          </div>
        </div>

        {/* Category Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Category</h3>
          <ul className="mt-2 space-y-2">
            {[
              "Sandwiches",
              "Burger",
              "Chicken Chup",
              "Drink",
              "Pizza",
              "Thi",
              "Non Veg",
              "Uncategorized",
            ].map((category, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="accent-orange-500" />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured Product */}
        <div className="mt-6">
          <Image
            src={Shopnow}
            alt="Featured Product"
            width={260}
            height={180}
            className=""
          />
          <h3 className="mt-2 text-lg font-semibold">Classic Restaurant</h3>
          <p className="text-orange-400 font-bold">45.00$</p>
          <button className="mt-2 flex items-center space-x-1 text-white">
            <span>Shop Now</span>
            <ChevronRight />
          </button>
        </div>

        {/* Price Filter */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Filter By Price</h3>
          <input
            type="range"
            min="0"
            max="8000"
            className="w-full mt-2 accent-orange-500"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>From $0 to $8000</span>
            <button className="text-orange-500 font-semibold">Filter</button>
          </div>
        </div>

        {/* Latest Products */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Latest Products</h3>
          <ul className="mt-3 space-y-4">
            {[
              { name: "Pizza", price: "35.00", stars: 5 },
              { name: "Cupcake", price: "35.00", stars: 4 },
              { name: "Cookies", price: "35.00", stars: 3 },
              { name: "Burger", price: "35.00", stars: 4 },
            ].map((product, index) => (
              <li key={index} className="flex items-center space-x-4">
                <Image
                  src={Side}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold">{product.name}</h4>
                  <div className="text-orange-500">
                    {"★".repeat(product.stars)}
                    {"☆".repeat(5 - product.stars)}
                  </div>
                  <p>${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Tags */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Product Tags</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Services",
              "Our Menu",
              "Pizza",
              "Cupcake",
              "Burger",
              "Cookies",
              "Our Shop",
              "Tandoori Chicken",
            ].map((tag, index) => (
              <Link
                key={index}
                href={`/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-2 py-1 text-black hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </aside>
    );
  };

  return (
    <>
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
              Our Shop
            </h2>
            <div className="flex items-center space-x-2 text-black">
              <Link href="/" className="text-white">
                Home
              </Link>
              <span className="text-white"> &gt; </span>
              <Link href="/shop" className="text-orange-500">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="flex flex-col md:flex-row-reverse max-w-7xl mx-auto">
          <Sidebar />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 h-6">
            {product.map((product) => (
              <div key={product.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg ">
                <h4 className="font-bold text-xl mb-2">{product.name}</h4>
                <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
                
                <p className="text-sm mt-2">{product.description}</p>
                <div className="text-sm mt-2">{product.available ? "Available" : "Not Available"}</div>
                {product.image && (
                  <Image src={urlFor(product.image).url()} alt="Product Image" width={200} height={200} className="rounded-lg mt-3 " />
                )}
                <div className="flex inline gap-[1vw]">
                <div className=" text-md text-orange-500">${product.price}</div>
                <div className="line-through text-md text-gray-400">${product.originalPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button className="p-2 border rounded">1</button>
          <button className="p-2 border rounded">2</button>
          <button className="p-2 border rounded">3</button>
        </div>
      </div>
    </>
  );
};

export default OurShop;
