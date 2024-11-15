import { useToast } from "@/components/ui/use-toast";
import CulinaryTabs from "@/components/CulinarySection/CulinaryTabs";
import BookingForm from "@/components/BookingForm";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PopularItems } from "@/components/sections/PopularItems";
import { Footer } from "@/components/sections/Footer";
import TestimonialSlider from "@/components/sections/TestimonialSlider";


const Index = () => {
  const { toast } = useToast();

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    const yOffset = -70; 
    const yPosition = bookingSection?.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header onBookTableClick={scrollToBooking} />
      <HeroSection />
      <CulinaryTabs />
      <section id="popular-items-section">
        <PopularItems />
      </section>
      <section id="booking-section" className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <BookingForm />
            <div className="hidden md:block">
              <img
                src="images/reserved.jpg"
                alt="Restaurant Interior"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <Footer />
    </div>
  );
};

export default Index;
