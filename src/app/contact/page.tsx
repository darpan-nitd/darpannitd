"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    topic: "",
    subscribe: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : false;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // pop up a message to the user
    alert("Your form has been submitted!");
    // console.log("Form Data:", formData);
    // logic will go here to send the form data to the server
  };

  return (
    <div className="bg-[url('/bg-contact-1.svg')]">
      <Navbar />
      <div className="pt-28 flex justify-center items-center min-h-screen p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-black rounded-lg p-8 bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,.9)]"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Contact Us
          </h2>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-white text-white bg-opacity-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white text-white bg-opacity-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-white text-white bg-opacity-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="topic"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              className="bg-white text-white bg-opacity-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option className="bg-white text-black" value="">
                Select a Topic
              </option>
              <option value="general" className="bg-white text-black">
                General Inquiry
              </option>
              <option value="membership" className="bg-white text-black">
                Membership
              </option>
              <option value="events" className="bg-white text-black">
                Events
              </option>
              <option value="support" className="bg-white text-black">
                Support
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="bg-white text-white bg-opacity-10 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
