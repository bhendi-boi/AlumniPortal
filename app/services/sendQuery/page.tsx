'use client';
import Header from 'app/Header';
import React, { FormEvent, useState } from 'react';
const page = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //   ! TODO
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(message, email);
  };
  return (
    <main className="min-h-screen px-5 md:px-10">
      <section>
        <Header title="Contact" />
        <form onSubmit={handleSubmit} className="max-w-xl md:ml-20">
          <div className="mb-4 flex flex-col gap-1">
            <label htmlFor="email" className="text-contact-gray">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@gmail.com"
              value={email}
              required
              className="rounded-md bg-background p-4"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          {/* // ! clicking on label should foucs on textarea */}
          <fieldset className="mb-4 flex flex-col gap-1">
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
          <p className="text-center text-sm">
            You can also mail us at{' '}
            <a
              href="mailto:alumni.affairs@iiitdm.ac.in"
              target="_blank"
              rel="norefer"
              className="text-contact-blue underline underline-offset-2"
            >
              alumni.affairs@iiitdm.ac.in
            </a>
          </p>
          <button
            type="submit"
            className="mt-8 w-full rounded-md bg-contact-blue py-4 font-medium text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default page;