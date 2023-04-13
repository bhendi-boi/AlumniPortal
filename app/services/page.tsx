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
      <h2 className="my-2 text-2xl font-medium">Useful Links 👇</h2>
      <ul className="flex max-w-5xl flex-col gap-4 md:mx-auto">
        {/* //? Using NavLink active variant just for styling */}
        <li>
          <NavLink
            variant="active"
            title="Send Query"
            href="/services/sendQuery"
          >
            Send Query
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="active"
            title="Alumni Directory"
            href="/services/alumniDirectory"
          >
            Alumni Directory
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="active"
            title="Alumni Achievements"
            href="/services/alumniAchievements"
          >
            Alumni Achievements
          </NavLink>
        </li>
        <li>
          <NavLink
            variant="active"
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
