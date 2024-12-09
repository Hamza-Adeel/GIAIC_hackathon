import React from "react";
import Image from "next/image";
import upper from "@/app/assets/upper.png";
import mainCourseImage from "@/app/assets/main-course.png";
import third from "@/app/assets/third.png";
import Restaurant from "@/app/assets/restaurant.png";
import Bakery from "@/app/assets/bakery.png";
import Fork from "@/app/assets/fork.png";
import wolfCoffee from "@/app/assets/wolf-coffee.png";
import Bistro from "@/app/assets/Bistro.png";
import Cake from "@/app/assets/cake.png";
import {
  FaUserCheck,
  FaHamburger,
  FaUtensils,
  FaPizzaSlice,
} from "react-icons/fa";
import Link from "next/link";

const statsData = [
  {
    icon: <FaUserCheck className="text-orange-500 text-5xl mx-auto mb-4" />,
    number: "420",
    label: "Professional Chefs",
  },
  {
    icon: <FaHamburger className="text-orange-500 text-5xl mx-auto mb-4" />,
    number: "320",
    label: "Items Of Food",
  },
  {
    icon: <FaUtensils className="text-orange-500 text-5xl mx-auto mb-4" />,
    number: "30+",
    label: "Years Of Experience",
  },
  {
    icon: <FaPizzaSlice className="text-orange-500 text-5xl mx-auto mb-4" />,
    number: "220",
    label: "Happy Customers",
  },
];

const MenuCom = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
            Our Menu
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <Link href="/" className="text-white">
              Home
            </Link>
            <span className="text-white"> &gt; </span>
            <Link href="/menu" className="text-orange-500">
              Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="bg-white text-black  sm:px-16 ">
        <div className="container mx-auto lg:px-[135px] py-12">
          {/* Starter Menu Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Starter Menu Image */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src={mainCourseImage}
                alt="Starter Dish"
                className="w-[310px] rounded-lg shadow-lg"
              />
            </div>
            {/* Starter Menu Items */}
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Starter Menu
              </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Alder Grilled Chinook Salmon
                    </h3>
                    <p className="text-sm text-gray-500">
                      Toasted French bread topped with romaine, cheddar
                    </p>
                    <p className="text-xs text-gray-400">520 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">32$</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Berries and Creme Tart
                    </h3>
                    <p className="text-sm text-gray-500">
                      Cranberries, ricotta, mozzarella, kaleigo
                    </p>
                    <p className="text-xs text-gray-400">700 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">43$</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Tormentoso Bush Pizza Pintage
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ground cumin, avocados, peeled and cubed
                    </p>
                    <p className="text-xs text-gray-400">1000 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">14$</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Spicy Vegan Potato Curry
                    </h3>
                    <p className="text-sm text-gray-500">
                      Spreadable cream cheese, crumbled blue cheese
                    </p>
                    <p className="text-xs text-gray-400">560 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">35$</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Course Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Course Items */}
            <div>
              <h2 className="text-3xl font-bold text-orange-600 mb-4">
                Main Course
              </h2>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Optic Big Breakfast Combo Menu
                    </h3>
                    <p className="text-sm text-gray-500">
                      Toasted French bread topped with romaine, cheddar
                    </p>
                    <p className="text-xs text-gray-400">560 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">32$</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Cashew Chicken With Stir-Fry
                    </h3>
                    <p className="text-sm text-gray-500">
                      Cranberries, ricotta, mozzarella, kaleigo
                    </p>
                    <p className="text-xs text-gray-400">700 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">43$</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Vegetables & Green Salad
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ground cumin, avocados, peeled and cubed
                    </p>
                    <p className="text-xs text-gray-400">1000 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">14$</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Spicy Vegan Potato Curry
                    </h3>
                    <p className="text-sm text-gray-500">
                      Spreadable cream cheese, crumbled blue cheese
                    </p>
                    <p className="text-xs text-gray-400">560 CAL</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">35$</span>
                </li>
              </ul>
            </div>
            {/* Main Course Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={mainCourseImage}
                alt="Main Course Dish"
                className="w-[310px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="relative text-white mb-16 w-full h-[250px]">
          <div className="absolute inset-0">
            <Image
              src={third}
              alt="Background Image"
              layout="fill" // Make the image fill the container
              objectFit="cover" // Make the image cover the entire container
              objectPosition="center" // Center the image
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
            <div className="container mx-auto flex justify-center items-center h-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
                {statsData.map((stat, index) => (
                  <div key={index}>
                    {stat.icon}
                    <h3 className="text-4xl font-bold">{stat.number}</h3>
                    <p className="text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-600">Partners & Clients</h2>
          <p className="text-4xl font-bold text-black">We work with the best people</p>
        </div>
        <div className="flex justify-center items-center space-x-8">
          {/* Client Logos - Add your own images here */}
          <div className="flex justify-center items-center">
            <Image
              src={Restaurant}
              alt="Restaurant Logo"
              className="w-32 opacity-60"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Bakery}
              alt="Bakery Logo"
              className="w-32 opacity-60"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Fork}
              alt="Park & Spa Logo"
              className="w-32 opacity-60"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={wolfCoffee}
              alt="Wolf Coffee Logo"
              className="w-32 opacity-60"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Bistro}
              alt="Bistro Logo"
              className="w-32 opacity-60"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={Cake}
              alt="Bakery Logo"
              className="w-32 opacity-60"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuCom;
