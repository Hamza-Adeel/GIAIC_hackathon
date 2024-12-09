import Link from "next/link";
import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";
import upper from "../assets/upper.png";
import lemon from "../assets/lemon.png";
import yogurt from "../assets/yougurt.png";
import pasta from "../assets/pasta.png";
import third from "../assets/thirdSection.png";
import student from "../assets/Student.png";
import coffee from "@/app/assets/Coffee.png";
import person from "@/app/assets/Person.png";

export default function About() {
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
            About Us
          </h2>
          <div className="flex items-center space-x-2 text-black">
            <Link href="/" className="text-white">
              Home
            </Link>
            <span className="text-white"> &gt; </span>
            <Link href="/about" className="text-orange-500">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-white py-16 px-5">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
          {/* Left Content */}
          <div className="lg:w-1/3 w-full pr-10 mb-6 lg:mb-0">
            <h1 className="text-yellow-500 italic font-medium text-sm">
              About us _____
            </h1>
            <h2 className="text-3xl font-bold text-black mb-4">
              Food is an important part of a balanced Diet
            </h2>
            <p className="text-black leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex space-x-4">
              <button className="bg-orange-500 text-white py-2 px-4 rounded">
                Show More
              </button>
              <button className="flex items-center bg-black text-white py-2 px-4 rounded">
                <IoPlayOutline className="mr-2" />
                Watch video
              </button>
            </div>
          </div>
          {/* Right Images */}
          <div className="lg:w-2/3 w-full flex flex-wrap gap-4 justify-center">
            <Image
              className="rounded-lg"
              src={lemon}
              alt="Lemon Dish"
              width={200}
              height={200}
            />
            <Image
              className="rounded-lg"
              src={yogurt}
              alt="Yogurt Dish"
              width={200}
              height={200}
            />
            <Image
              className="rounded-lg"
              src={pasta}
              alt="Pasta Dish"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-black text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-black mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="rounded-lg mx-auto"
            src={third}
            alt="Why Choose Us"
            width={800}
            height={400}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {/* Feature 1 */}
          <div className="border rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              className="w-24 h-24 object-cover rounded-full"
              src={student}
              alt="Best Chef"
              width={96}
              height={96}
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-black text-lg">BEST CHEF</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="border rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              className="w-24 h-24 object-cover rounded-full"
              src={coffee}
              alt="120 Item Food"
              width={96}
              height={96}
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-black text-lg">120 Item Food</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="border rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              className="w-24 h-24 object-cover rounded-full"
              src={person}
              alt="Clean Environment"
              width={96}
              height={96}
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-black text-lg">Clean Environment</h3>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
