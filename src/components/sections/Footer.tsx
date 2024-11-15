import { Facebook, Twitter, Instagram, Youtube, Clock, Phone, MapPin, Calendar } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Clock className="text-secondary w-8 h-8 mb-4" />
          <h3 className="font-bold text-lg mb-2">OPEN TO LUNCH</h3>
          <p className="text-gray-400">Mon to Sat: 11:30 AM - 3 PM</p>
        </div>

        <div className="flex flex-col items-center">
          <Calendar className="text-secondary w-8 h-8 mb-4" />
          <h3 className="font-bold text-lg mb-2">LATE TO SAY</h3>
          <p className="text-gray-400">Mon to Sat: 7 PM - 11 PM</p>
        </div>

        <div className="flex flex-col items-center">
          <Phone className="text-secondary w-8 h-8 mb-4" />
          <h3 className="font-bold text-lg mb-2">BOOK A TABLE</h3>
          <p className="text-gray-400">Support: +880 1634567890</p>
        </div>

        <div className="flex flex-col items-center">
          <MapPin className="text-secondary w-8 h-8 mb-4" />
          <h3 className="font-bold text-lg mb-2">OUR ADDRESS</h3>
          <p className="text-gray-400">Dhaka Cantonment, Dhaka 1206</p>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex justify-center space-x-6">
          <Facebook className="hover:text-secondary w-6 h-6 cursor-pointer transition-transform transform hover:scale-110" />
          <Twitter className="hover:text-secondary w-6 h-6 cursor-pointer transition-transform transform hover:scale-110" />
          <Instagram className="hover:text-secondary w-6 h-6 cursor-pointer transition-transform transform hover:scale-110" />
          <Youtube className="hover:text-secondary w-6 h-6 cursor-pointer transition-transform transform hover:scale-110" />
        </div>
        <p className="text-center mt-6 text-gray-500">
          © 2024 All Rights Reserved. Designed by Mohammad Salman
        </p>
      </div>
    </footer>
  );
};

export default Footer;
