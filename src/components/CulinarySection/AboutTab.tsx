import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AboutTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm">Market<br/>Experiences</div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
            alt="Culinary Experience"
            className="rounded-lg w-full"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h2>
          <p className="text-gray-600">At our restaurant, we blend culinary artistry with top-quality ingredients to create unforgettable dining moments. Every dish is carefully crafted to bring out unique flavors, combining tradition with innovation. From our meticulously prepared appetizers to our savory entrees and decadent desserts, each bite is a celebration of taste and passion. Whether you're joining us for an intimate meal or a gathering with loved ones, we promise an exceptional experience that delights the senses. Step into our warm ambiance and let us take you on a journey of gastronomic delight.</p>
          <div className="flex gap-4">
            <Button className="bg-secondary text-black hover:bg-opacity-90">ABOUT MORE</Button>
            <Button variant="outline" className="gap-2">
              <Phone className="h-4 w-4" />
              +880 1634567890
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;