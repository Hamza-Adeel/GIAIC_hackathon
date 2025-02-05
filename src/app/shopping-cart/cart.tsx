"use client";
import React, { useState } from "react";

// Import images
import upper from "@/app/assets/upper.png";
import burgerImage from "@/app/assets/burger.png";
import freshLimeImage from "@/app/assets/fresh_lime.png";
import pizzaImage from "@/app/assets/pizza.png";
import muffinImage from "@/app/assets/mufflin.png";
import cheeseButterImage from "@/app/assets/cheese-butter.png";
import Link from "next/link";
import Image from "next/image";

// Define initial cart items
const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: burgerImage, rating: 4 },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: freshLimeImage, rating: 3 },
  { name: "Pizza", price: 9.99, quantity: 4, image: pizzaImage, rating: 5 },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: muffinImage, rating: 4 },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: cheeseButterImage, rating: 3 },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  const renderStars = (rating: number) => {
    const fullStars = Array.from({ length: rating }, (_, i) => (
      <span key={`full-${i}`} className="text-orange-500">&#9733;</span>
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => (
      <span key={`empty-${i}`} className="text-gray-300">&#9733;</span>
    ));
    return [...fullStars, ...emptyStars];
  };

  return (
    <div className="bg-white font-sans">
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={upper}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
          layout="fill"
        />
        <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
          <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">Shopping Cart</h2>
          <div className="flex items-center space-x-2 text-black">
            <Link href="/" className="text-white">Home</Link>
            <span className="text-white"> &gt; </span>
            <Link href="/shopping-cart" className="text-orange-500">Shopping Cart</Link>
          </div>
        </div>
      </div>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4 font-semibold">Product</th>
              <th className="p-4 font-semibold">Price</th>
              <th className="p-4 font-semibold">Quantity</th>
              <th className="p-4 font-semibold">Total</th>
              <th className="p-4 font-semibold">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <span className="block">{item.name}</span>
                    <div className="flex">{renderStars(item.rating)}</div>
                  </div>
                </td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value) || 0)
                    }
                    className="w-16 border rounded px-2 py-1 text-center"
                    min="0"
                  />
                </td>
                <td className="p-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td
                  className="p-4 text-red-500 cursor-pointer"
                  onClick={() => handleRemoveItem(index)}
                >
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter promo code: 'DISCOUNT10'"
                className="flex-grow border rounded-l px-4 py-2"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-between mb-4">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Discount</span>
                <span>${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping Charges</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
