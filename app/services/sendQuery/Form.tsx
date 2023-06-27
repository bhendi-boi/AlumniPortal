'use client';
import React, { useState, FormEvent } from 'react';
import Toast from '../Toast';

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append(
      'access_key',
      process.env.NEXT_PUBLIC_WEB3_FORMS_ACCESS_KEY || '',
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setIsSuccess(true);
    } else {
      setIsFailure(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-xl md:ml-20">
        <input
          type="hidden"
          name="subject"
          value="Query submitted from alumni affairs website"
        />
        <div className="mb-4 flex flex-col gap-1">
          <label
            htmlFor="name"
            className="cursor-pointer font-medium text-contact-blue"
          >
            Name
          </label>
          <input
            title="Your name"
            type="name"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="rounded-md bg-secondary-background p-4"
          />
        </div>
        <div className="mb-4 flex flex-col gap-1">
          <label
            htmlFor="email"
            className="cursor-pointer font-medium text-contact-blue"
          >
            Email
          </label>
          <input
            title="Your email"
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
            className="rounded-md bg-secondary-background p-4"
          />
        </div>
        <fieldset className="mb-4 flex flex-col gap-1">
          <label
            htmlFor="message"
            className="cursor-pointer font-medium text-contact-blue"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            title="Your message goes here"
            placeholder="Your message goes here"
            required
            className="min-h-[10rem] rounded-md bg-secondary-background p-4"
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
          className="mt-8 w-full rounded-md bg-contact-blue py-4 font-medium text-white hover:opacity-90 active:opacity-80"
        >
          Submit
        </button>
      </form>
      <Toast
        state={isSuccess}
        setState={setIsSuccess}
        message="Email sent successfully !"
      />
      <Toast
        state={isFailure}
        setState={setIsFailure}
        message="Unable to send the email. Try again"
      />
    </>
  );
};

export default Form;
