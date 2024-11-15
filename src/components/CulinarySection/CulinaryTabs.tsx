import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab from "./AboutTab";
import ExperienceTab from "./ExperienceTab";
import ContactTab from "./ContactTab";
import { Clock, Star, MapPin } from "lucide-react";

const CulinaryTabs = () => {
  return (
    <section className="py-16 container mx-auto">
      <Tabs defaultValue="about" className="space-y-8">
        <TabsList className="w-full justify-start border-b">
          <TabsTrigger value="about" className="text-lg">About</TabsTrigger>
          <TabsTrigger value="experience" className="text-lg">Experience</TabsTrigger>
          <TabsTrigger value="contact" className="text-lg">Contact</TabsTrigger>
        </TabsList>
        
        <TabsContent value="about">
          <AboutTab />
        </TabsContent>
        
        <TabsContent value="experience">
          <ExperienceTab />
        </TabsContent>
        
        <TabsContent value="contact">
          <ContactTab />
        </TabsContent>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="text-primary text-4xl flex justify-center">
              <Clock />
            </div>
            <h3 className="font-bold">FAST DELIVERY</h3>
            <p className="text-gray-600">Within 30 minutes</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-primary text-4xl flex justify-center">
              <Star />
            </div>
            <h3 className="font-bold">ABSOLUTE DINING</h3>
            <p className="text-gray-600">Best buffet restaurant</p>
          </div>
          <div className="text-center space-y-4">
            <div className="text-primary text-4xl flex justify-center">
              <MapPin />
            </div>
            <h3 className="font-bold">PICKUP DELIVERY</h3>
            <p className="text-gray-600">Grab your food order</p>
          </div>
        </div>
      </Tabs>
    </section>
  );
};

export default CulinaryTabs;