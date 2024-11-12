import React from "react";

function ContactForm() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-700 text-white" required />
        <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-700 text-white" required />
        <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-700 text-white" required />
        <button type="submit" className="w-full p-2 bg-green-500 rounded hover:bg-green-600">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
