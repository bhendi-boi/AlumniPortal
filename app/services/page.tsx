import React from 'react';
import type { Metadata } from 'next';
import Header from 'app/Header';
import NavLink from 'app/NavLink';

export const metadata: Metadata = {
  title: {
    absolute: 'Services | AlumniPortal',
  },
  description: 'Services which we offer.',
};

const page = () => {
  return (
    <>
      <Header title="Alumni Services" />
      <ul className="flex max-w-5xl flex-col gap-4 md:mx-auto">
        {/* //? Using NavLink active variant just for styling */}
        <li>
          <NavLink
            variant="cardActive"
            title="Send Query"
            href="/services/sendQuery"
          >
            Send Query
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="cardActive"
            title="Newsroom"
            href="/services/newsroom"
          >
            Newsroom
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="cardActive"
            title="Alumni Fund"
            href="/services/fund"
          >
            Fund
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="cardActive"
            title="Volunteer"
            href="/services/volunteer"
          >
            Volunteer
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default page;
