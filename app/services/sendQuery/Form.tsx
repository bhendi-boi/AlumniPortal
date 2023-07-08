'use client';
import React, { useState, FormEvent } from 'react';
import { Popover } from '@headlessui/react';
import Toast from '../Toast';
import { HiChevronUpDown } from 'react-icons/hi2';

type Subjects =
  | 'Campus Visit'
  | 'Update Database'
  | 'Request for Alumni Cards'
  | 'Volunteer with us'
  | 'Others';
const subjects = [
  'Campus Visit',
  'Update Database',
  'Request for Alumni Cards',
  'Volunteer with us',
  'Others',
] as const;

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pickSubject, setPickSubject] = useState<Subjects>('Campus Visit');
  const [otherSubject, setOtherSubject] = useState('');
  const subject = pickSubject === 'Others' ? otherSubject : pickSubject;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-16 max-w-xl md:ml-20">
        <input type="hidden" name="subject" value={subject} />
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
        <div className="mb-8">
          <Popover className="relative w-2/5">
            <Popover.Button className="hover:bg-primary-background flex w-full cursor-pointer items-center justify-between rounded-md py-4 pr-4 font-medium text-contact-blue">
              <span>Pick your Query</span>{' '}
              <HiChevronUpDown className="h-6 w-6 text-black" />{' '}
            </Popover.Button>
            <Popover.Panel className="absolute left-0 top-14 z-10 w-full overflow-hidden rounded-md bg-neutral-50 shadow-md">
              {({ close }) => (
                <div className="flex flex-col overflow-hidden">
                  {subjects.map((item) => {
                    return (
                      <button
                        type="button"
                        onClick={() => {
                          setPickSubject(item);
                          close();
                        }}
                        className="py-3 transition-colors duration-300 hover:bg-contact-blue hover:text-white"
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
            </Popover.Panel>
          </Popover>
        </div>
        {pickSubject === 'Others' && (
          <div className="mb-4 flex flex-col gap-1">
            <label
              htmlFor="other-query"
              className="cursor-pointer font-medium text-contact-blue"
            >
              Enter your Query
            </label>
            <input
              type="text"
              id="other-query"
              required
              value={otherSubject}
              onChange={(e) => setOtherSubject(e.currentTarget.value)}
              className="rounded-md bg-secondary-background p-4"
            />
          </div>
        )}
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
          disabled={isLoading}
          type="submit"
          className="mt-8 w-full rounded-md bg-contact-blue py-4 font-medium text-white hover:opacity-90 active:bg-opacity-80 disabled:cursor-not-allowed disabled:bg-opacity-50"
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
