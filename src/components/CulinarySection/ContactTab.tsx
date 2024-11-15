import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { supabase } from "@/supabaseClient";


const ContactTab = () => {
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Insert data into Supabase
    const { error } = await supabase.from("contact").insert([
      {
        name,
        email,
        subject,
        message,
      },
    ]);

    if (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error submitting your message. Please try again.",
        status: "error",
      });
    } else {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-4xl font-bold text-center">GET IN TOUCH</h2>
      <p className="text-gray-600 text-center">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[150px]"
          required
        />
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactTab;
