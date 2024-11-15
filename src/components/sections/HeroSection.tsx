import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: false, // Set to false to fix height issues
    arrows: false,
  };

  const foodOffers = [
    { image: "/images/khabsa.jpg", text: "Enjoy the Rich Flavors of Kabsa", offer: "15% OFF" },
    { image: "/images/mandi.jpg", text: "Special Offer: Mandi Delight", offer: "20% OFF" },
    { image: "/images/shwarma.jpg", text: "Savory Shawarma Just for You", offer: "10% OFF" },
    { image: "/images/dish.jpg", text: "Authentic Saudi Fattah Available", offer: "25% OFF" },
    { image: "/images/samboosa.jpg", text: "Freshly Crispy Deep-fried Pastries", offer: "30% OFF" },
    { image: "/images/mutabaq.jpg", text: "Crispy, Flaky Pastry", offer: "18% OFF" },
  ];

  const scrollToPopularItems = () => {
    const popularItemsSection = document.getElementById("popular-items-section");
    if (popularItemsSection) {
      const yOffset = -80;
      const yPosition = popularItemsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-8 gap-4 py-16">
        {/* Text Section */}
        <div className="space-y-6 order-1 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            TASTE THE AUTHENTIC SAUDI CUISINE
          </h1>
          <p className="text-base md:text-lg">
            Always the best Saudi dishes in the world, serving you something beyond flavor
          </p>
          <Button
            className="bg-secondary text-black hover:bg-opacity-90"
            onClick={scrollToPopularItems}
          >
            EXPLORE MENU
          </Button>
        </div>

        {/* Image Slider Section */}
        <div className="relative order-2 md:order-2 h-64 md:h-80 overflow-hidden">
          <Slider {...settings}>
            {foodOffers.map((offer, index) => (
              <div key={index} className="relative h-64 md:h-80">
                <img
                  src={offer.image}
                  alt={offer.text}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-secondary to-primary text-black p-3 rounded-full flex items-center justify-center h-12 w-12 md:h-16 md:w-16 shadow-lg">
                  <p className="font-bold text-xs md:text-sm">{offer.offer}</p>
                </div>
                <div className="absolute bottom-4 left-4 bg-secondary text-black p-2 rounded-lg">
                  <p className="font-bold text-xs md:text-sm">{offer.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
