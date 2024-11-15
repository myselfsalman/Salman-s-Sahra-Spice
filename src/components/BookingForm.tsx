import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { supabase } from "../supabaseClient";

const BookingForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("salman").insert([
      { name, email, date, people, message },
    ]);

    if (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        style: { backgroundColor: "#f87171", color: "#ffffff" },
      });
    } else {
      toast({
        title: "Booking Confirmed!",
        description: "We'll see you soon!",
        style: { backgroundColor: "#10b981", color: "#ffffff" },
      });
      setName("");
      setEmail("");
      setDate("");
      setPeople("");
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">BOOK YOUR TABLE</h2>
        <p className="text-gray-300">
        Make your dining experience unforgettable by reserving a table with us. Whether you're planning a romantic evening, a celebration, or simply looking to enjoy a meal with family and friends, our team is here to provide a seamless and memorable experience. Relax in our cozy ambiance, savor exceptional dishes, and let us handle the rest. Reserve now to ensure your spot and look forward to a delightful culinary journey with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Your Name *"
            className="bg-transparent border-gray-600 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-gray-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="date"
            placeholder="Reservation Date"
            className="bg-transparent border-gray-600 text-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{
              colorScheme: "dark",
            }}
          />
          <select
            className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm text-white focus:outline-none"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            required
          >
            <option value="" className="bg-black">Total People</option>
            <option value="2" className="bg-black">2 People</option>
            <option value="4" className="bg-black">4 People</option>
            <option value="6" className="bg-black">6 People</option>
            <option value="8" className="bg-black">8 People</option>
          </select>
        </div>
        <Textarea
          placeholder="Message"
          className="bg-transparent border-gray-600 text-white"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-secondary text-black hover:bg-opacity-90 px-8"
        >
          BOOK NOW
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
