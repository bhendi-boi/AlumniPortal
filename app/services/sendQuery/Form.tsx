'use client';
import React, { useState, FormEvent } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //   ! TODO
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(message, email);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl md:ml-20">
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="email" className="text-contact-gray">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          value={email}
          required
          className="p-4 rounded-md bg-background"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      {/* // ! clicking on label should foucs on textarea */}
      <fieldset className="flex flex-col gap-1 mb-4">
        <label htmlFor="message" className="text-contact-gray">
          Message
        </label>
        <textarea
          title="Your message goes here"
          placeholder="Your message goes here"
          value={message}
          required
          className="min-h-[10rem] rounded-md bg-background p-4"
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </fieldset>
      <p className="text-sm text-center">
        You can also mail us at{' '}
        <a
          href="mailto:alumni.affairs@iiitdm.ac.in"
          target="_blank"
          rel="norefer"
          className="underline text-contact-blue underline-offset-2"
        >
          alumni.affairs@iiitdm.ac.in
        </a>
      </p>
      <button
        type="submit"
        className="w-full py-4 mt-8 font-medium text-white rounded-md bg-contact-blue"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
