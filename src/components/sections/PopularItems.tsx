import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const popularItems = [
  { 
    name: "Kabsa", 
    description: "Kabsa is a traditional Saudi Arabian dish made with tender, spiced beef or chicken cooked with rice, tomatoes, and a blend of aromatic spices.", 
    price: "750 BDT",
    image: "/images/khabsa.jpg" 
  },
  { 
    name: "Mandi", 
    description: "Mandi is a popular Yemeni dish with slow-cooked lamb or chicken served over fragrant basmati rice, often prepared in a tandoor for a smoky flavor.", 
    price: "700 BDT",
    image: "/images/mandi.jpg" 
  },
  { 
    name: "Jareesh", 
    description: "Jareesh is a comforting dish made with crushed wheat, cooked with spices, chicken, or lamb, offering a thick, savory, and hearty meal.", 
    price: "450 BDT",
    image: "/images/jareesh.jpg" 
  },
  { 
    name: "Mutabbaq", 
    description: "A crispy, flaky pastry filled with spiced minced meat, eggs, and herbs, offering a satisfying balance of spices and crunch.", 
    price: "300 BDT",
    image: "/images/mutabaq.jpg" 
  },
  { 
    name: "Harees", 
    description: "Harees is a porridge-like dish made from wheat and meat, delicately flavored and enjoyed especially during Ramadan.", 
    price: "500 BDT",
    image: "/images/hares.jpg" 
  },
  { 
    name: "Samboosa", 
    description: "Crispy deep-fried pastries filled with spiced meat, vegetables, or cheese, perfect for a crunchy bite.", 
    price: "250 BDT (per 5 pieces)",
    image: "/images/samboosa.jpg" 
  },
  { 
    name: "Thareed", 
    description: "A wholesome stew made with tender meat, vegetables, and bread pieces that soak up the flavors.", 
    price: "550 BDT",
    image: "/images/thared.jpg" 
  },
  { 
    name: "Shawarma", 
    description: "Grilled, marinated chicken or beef wrapped in flatbread with tahini, garlic sauce, and fresh veggies.", 
    price: "200 BDT (single wrap)",
    image: "/images/shwarma.jpg" 
  },
  { 
    name: "Saleeg", 
    description: "A creamy rice dish made with broth and topped with grilled chicken or meat, similar to a risotto.", 
    price: "600 BDT",
    image: "/images/saleeq.jpg" 
  },
  { 
    name: "Falafel", 
    description: "Deep-fried balls made from ground chickpeas or fava beans, seasoned with garlic, parsley, and spices.", 
    price: "180 BDT (per 5 pieces)",
    image: "/images/falafel.jpg" 
  },
];

export const PopularItems = () => {
  const [currentFoodItem, setCurrentFoodItem] = useState(0);
  const [showModal, setShowModal] = useState(null);

  const handleNext = () => {
    setCurrentFoodItem((prev) => (prev + 1) % popularItems.length);
  };

  const handlePrevious = () => {
    setCurrentFoodItem((prev) => (prev === 0 ? popularItems.length - 1 : prev - 1));
  };

  const openModal = (index) => {
    setShowModal(index);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-red-500 font-semibold flex items-center space-x-2">
            <span className="h-2 w-2 bg-red-500 rounded-full mr-2"></span> Crispy, Every Bite Taste
          </p>
          <h2 className="text-3xl font-bold mt-1">POPULAR FOOD ITEMS</h2>
        </div>
        
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      
      <div className="relative mt-8">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentFoodItem * 25}%)` }}
          >
            {popularItems.map((item, index) => (
              <div
                key={index}
                className={`min-w-[25%] p-4 transition-transform duration-300 transform ${
                  index === currentFoodItem ? "scale-105" : "scale-100"
                }`}
              >
                <div
                  onClick={() => openModal(index)}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-gray-700 font-semibold mt-2">{item.price}</p> {/* Price added here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 bg-gray-200 rounded-full p-1 focus:outline-none"
            >
              &times;
            </button>
            <img
              src={popularItems[showModal].image}
              alt={popularItems[showModal].name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{popularItems[showModal].name}</h3>
            <p className="text-gray-700">{popularItems[showModal].description}</p>
            <p className="text-gray-900 font-semibold mt-2">{popularItems[showModal].price}</p> {/* Price added in modal */}
          </div>
        </div>
      )}
    </section>
  );
};
