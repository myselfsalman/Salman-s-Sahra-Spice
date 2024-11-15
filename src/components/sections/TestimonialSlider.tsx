import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TestimonialSlider = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // Hide default arrows
  };

  const testimonials = [
    {
      video: "/videos/two.mp4",
      clientName: "Khalid Al Darsy",
      location: "Dhaka Cantonment, Dhaka 1206",
      feedback:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      image: "/images/face1.jpg",
    },
    {
        video: "/videos/three.mp4",
        clientName: "Khalid Al Darsy",
        location: "Mirpur 1, Dhaka",
        feedback:
          "Amazing Kabsa and great hospitality. The food presentation was top-notch, and the ambiance was perfect for a family outing. Highly recommended!",
        image: "/images/face2.png",
      },
    {
      video: "/videos/one.mp4",
      clientName: "Roknuzzaman Sojib",
      location: "Dhanmondi 32, Dhaka",
      feedback:
        "Best Shawarma in town! The meat is perfectly seasoned and tender, and the garlic sauce adds the perfect touch. Highly recommend it!",
      image: "/images/face3.jpg",
    },
  ];

  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="py-16 px-4">
      {/* Title Section */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8 relative">
          <div>
            <p className="text-red-500 font-medium text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span> Crispy, Every Bite Taste
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              WHAT SOME OF MY CUSTOMERS SAY
            </h2>
          </div>

          {/* Desktop Arrows - Positioned on the same line as the title */}
          <div className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 space-x-4">
            <button
              onClick={handlePrev}
              className="text-gray-800 bg-transparent border border-gray-800 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition flex items-center"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="text-gray-800 bg-transparent border border-gray-800 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition flex items-center"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
              >
                {/* Mobile: Video first, then comment */}
                <div className="md:hidden">
                  <div className="w-full mb-4">
                    <video
                      src={testimonial.video}
                      controls
                      className="w-full h-64 rounded-lg shadow-lg"
                    />
                  </div>
                  <div
                    className="bg-red-500 text-white flex flex-col justify-center p-6 rounded-lg relative"
                    style={{ height: "auto" }}
                  >
                    <p className="text-lg italic mb-4">{testimonial.feedback}</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.clientName}
                        className="w-16 h-16 rounded-full border-2 border-yellow-400"
                      />
                      <div>
                        <p className="text-lg font-semibold">{testimonial.clientName}</p>
                        <p className="text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop: Comment beside video */}
                <div className="hidden md:flex justify-center">
                  <div className="grid grid-cols-2 items-stretch gap-0 max-w-4xl mx-auto w-full">
                    {/* Comment Box */}
                    <div className="bg-red-500 text-white flex flex-col justify-center items-start p-6 rounded-l-lg">
                      <p className="text-lg italic mb-4">{testimonial.feedback}</p>
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.clientName}
                          className="w-16 h-16 rounded-full border-2 border-yellow-400"
                        />
                        <div>
                          <p className="text-lg font-semibold">{testimonial.clientName}</p>
                          <p className="text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Video Box */}
                    <div className="w-full relative">
                      <video
                        src={testimonial.video}
                        controls
                        className="w-full h-full rounded-r-lg shadow-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Mobile Arrows - Below the slider */}
          <div className="flex justify-center space-x-4 mt-6 md:hidden">
            <button
              onClick={handlePrev}
              className="text-gray-800 bg-transparent border border-gray-800 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="text-gray-800 bg-transparent border border-gray-800 rounded-full px-4 py-2 hover:bg-gray-800 hover:text-white transition"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
