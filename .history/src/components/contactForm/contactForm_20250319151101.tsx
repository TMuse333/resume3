"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.webp";

const applicationQuestions = [
  {
    title: "name",
    question: "Your name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    title: "email",
    question: "Your email",
    placeholder: "Enter your email",
    isEmail: true,
    required: true,
  },
  {
    title: "phone",
    question: "Your phone number",
    placeholder: "Enter your phone number",
    isPhoneNumber: true,
    required: true,
  },
  {
    title: "message",
    question: "Your message",
    placeholder: "Enter your message",
    required: false,
  },
];

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (title:string, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [title]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="w-full flex flex-col items-center">
      <section className="flex flex-col-reverse md:flex-row justify-around items-center max-w-[1200px] w-full">
        <section className="mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-4">
            Let’s Build Something Great Together!
          </h2>
          <Image src={logo} alt="logo" className="w-[40vw] max-w-[445px] mx-auto" width={1200} height={630} />
          <p className="px-4 sm:text-lg mt-4">
            At Sagittarius Construction, we are committed to delivering top-quality decks, fences, and renovations that stand the test of time. Contact us now and let’s start planning your next project!
          </p>
        </section>

        <section className="mt-12 w-full max-w-[455px]">
          <h3 className="mb-4 text-left text-lg">Fill out the form with your requirements:</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {applicationQuestions.map((question, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-lg">{question.question}</label>
                <input
                  type="text"
                  placeholder={question.placeholder}
                  value={formState[question.title] || ""}
                  onChange={(e) => handleChange(question.title, e.target.value)}
                  className="p-2 rounded border"
                  required={question.required}
                />
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#4D8890] p-3 rounded-xl text-white hover:text-[#4D8890] hover:bg-white transition-all"
            >
              Submit form
            </button>
          </form>
        </section>
      </section>
    </section>
  );
};

export default ContactForm;
