import React from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  pageDots: true,
  imagesLoaded: true
};

const properties = [
  {
    src: 'https://via.placeholder.com/600x400',
    title: 'Modern Apartment',
    description: 'Spacious living room with a great view.'
  },
  {
    src: '/file.svg',
    title: 'Cozy Bedroom',
    description: 'Bright and comfortable bedroom with natural light.'
  },
  {
    src: 'https://via.placeholder.com/600x600',
    title: 'Stylish Kitchen',
    description: 'Modern kitchen with the latest appliances.'
  }
];

export default function PropertyBrochure() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Property Brochure</h1>
      <Flickity className={'carousel'} options={flickityOptions}>
        {properties.map((property, index) => (
          <div key={index} className="carousel-cell p-4">
            <img
              src={property.src}
              alt={property.title}
              className="rounded-lg shadow-md w-full h-80 object-cover"
            />
            <div className="mt-2 text-center">
              <h2 className="text-xl font-semibold">{property.title}</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  );
}

// Don't forget to install the necessary packages:
// npm install react-flickity-component flickity

// Tailwind CSS for styling:
// npm install -D tailwindcss
// npx tailwindcss init

// Add Tailwind directives in your styles/globals.css or equivalent:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
