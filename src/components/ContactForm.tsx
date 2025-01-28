import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out! We'll get back to you soon.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="space-y-2">
        <label htmlFor="name" className="text-lg font-serif">Name</label>
        <Input
          id="name"
          placeholder="Your name"
          className="bg-black/20 border-primary/20 placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-lg font-serif">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          className="bg-black/20 border-primary/20 placeholder:text-gray-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-lg font-serif">Message</label>
        <Textarea
          id="message"
          placeholder="Your message..."
          className="bg-black/20 border-primary/20 placeholder:text-gray-500 min-h-[150px]"
        />
      </div>
      <Button 
        type="submit"
        className="w-full bg-primary hover:bg-primary/80 text-white font-serif text-lg py-6"
      >
        Send Message
      </Button>
    </form>
  );
};