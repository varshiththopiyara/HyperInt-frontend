import  { useState } from "react";

import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";

function Product() {
  const images = [img1, img2, img3];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-center gap-4">
          <img
            src={selectedImage}
            alt="Product"
            onClick={() => setIsOpen(true)}
            className="w-75 h-64 object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
          />
          <div className="flex gap-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-[#C68642]"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#6B3E26]">
            🥜 Natural Peanut Butter
          </h2>

          <p className="text-[#3E2723] mt-4">
            Made from 100% roasted peanuts with no added sugar or preservatives.
            Perfect for breakfast, gym diets, and healthy snacking.
          </p>

          <ul className="mt-4 text-[#3E2723] space-y-1">
            <li>✔ High Protein</li>
            <li>✔ No Artificial Additives</li>
            <li>✔ Smooth & Crunchy Options</li>
          </ul>
        </div>

        <div className="bg-[#FFF8F0] border border-[#EAD7C5] p-6 rounded-xl shadow-sm text-center">
          <h3 className="text-2xl font-bold text-[#C68642]">₹299</h3>

          <p className="text-sm text-gray-500 mt-1">
            Inclusive of all taxes
          </p>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={decrease}
              className="px-3 py-1 border rounded-lg text-lg"
            >
              −
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              onClick={increase}
              className="px-3 py-1 border rounded-lg text-lg"
            >
              +
            </button>
          </div>

          <button className="mt-6 w-full bg-[#6B3E26] text-white py-3 rounded-lg hover:opacity-90 transition">
            Buy Now
          </button>

          <button className="mt-3 w-full border border-[#6B3E26] text-[#6B3E26] py-2 rounded-lg hover:bg-[#EAD7C5] transition">
            Add to Cart
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={selectedImage}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;