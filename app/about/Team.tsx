import React from 'react';
import TeamMemberCard from './TeamMemberCard';

type MemberData = {
  imagePath: string;
  name: string;
  position:
    | 'Professor In Charge'
    | 'Secretary'
    | 'Joint Secretary'
    | 'Coordinator';
  email: string;
};
const CORE_TEAM: MemberData[] = [
  {
    imagePath: '/iiitdm.jpg',
    name: 'Dr. ....',
    position: 'Professor In Charge',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: 'N Shree Dhyuthi',
    position: 'Secretary',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: 'Srinidhi',
    position: 'Joint Secretary',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
];

const COORDINATORS: MemberData[] = [
  {
    imagePath: '/iiitdm.jpg',
    name: '.....',
    position: 'Coordinator',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: '.....',
    position: 'Coordinator',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: '.....',
    position: 'Coordinator',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: '.....',
    position: 'Coordinator',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
  {
    imagePath: '/iiitdm.jpg',
    name: '.....',
    position: 'Coordinator',
    email: 'alumni.affairs@iiitdm.ac.in',
  },
];

const Team = () => {
  return (
    <section className="mx-auto my-8 max-w-5xl">
      {/* // ! add lines around Team */}
      <header className="mx-auto mb-4 max-w-3xl">
        <h2 className="text-center text-2xl font-medium">Team</h2>
      </header>
      <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:gap-0 md:p-0">
        {CORE_TEAM.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
      <div className="flex max-w-5xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:gap-0 md:p-0">
        {COORDINATORS.map((coordinator) => (
          <TeamMemberCard key={coordinator.name} {...coordinator} />
        ))}
      </div>
    </section>
  );
};

export default Team;
