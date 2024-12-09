import React from 'react';
import Image from 'next/image';

// Import images from the src/app/assets folder
import Food1 from '@/app/assets/food1.png';
import Food2 from '@/app/assets/food2.png';
import Food3 from '@/app/assets/food3.png';
import Food4 from '@/app/assets/food4.png';

const items = [
  { id: 1, Image: Food1, label: "Save 50% on Fast Food" },
  { id: 2, Image: Food2, label: "Delicious Burgers" },
  { id: 3, Image: Food3, label: "Healthy Salads" },
  { id: 4, Image: Food4, label: "Desserts" },
];

const FoodCategory = () => {
  return (
    <section className="bg-black text-white py-16 px-20">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <div
                className="relative w-full max-w-full h-auto"
                style={{
                  borderRadius: '6px 0px 0px 0px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={item.Image} // Use the imported image
                  alt={item.label}
                  className="object-cover rounded-lg"
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
