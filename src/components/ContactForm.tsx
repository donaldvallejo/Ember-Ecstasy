import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current!,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus('success');
        if (form.current) form.current.reset();
      }, (error) => {
        setSubmitStatus('error');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="mt-1 block w-full px-3 py-2 bg-black/20 border border-primary/20 rounded-md shadow-sm backdrop-blur-sm text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="mt-1 block w-full px-3 py-2 bg-black/20 border border-primary/20 rounded-md shadow-sm backdrop-blur-sm text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-black/20 border border-primary/20 rounded-md shadow-sm backdrop-blur-sm text-white"
        ></textarea>
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {submitStatus === 'success' && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};