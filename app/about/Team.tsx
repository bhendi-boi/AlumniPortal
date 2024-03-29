import ManagementCard from './ManagementCard';
import { MANAGEMENT, CORE_TEAM, MENTORS } from 'content/about';
import { CiMail } from 'react-icons/ci';
import TeamCard from './TeamCard';
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";

const Team = () => {
  const teamNames = [
    {
      icon: <IoMdPeople className="h-12 w-12" />,
      name: 'Core Team',
      members: CORE_TEAM,
    },
    {
      icon: <AiOutlineAntDesign className="h-12 w-12" />,
      name: 'Mentors',
      members: MENTORS,
    },
  ];
  return (
    <section className="mx-auto my-8 max-w-7xl md:my-16">
      <header className="mx-auto mb-10 max-w-7xl text-center">
        <h2 className="relative inline text-center font-lora text-2xl font-medium text-contact-blue before:absolute before:right-full before:top-1/2 before:h-px before:w-0 before:-translate-x-8 before:bg-black before:content-[''] after:absolute after:left-full after:top-1/2 after:h-px after:w-0 after:translate-x-8 after:bg-black after:content-[''] md:before:w-0 md:after:w-0">
          Team
        </h2>
      </header>
      <div className="mx-auto mb-8 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 md:flex-row md:gap-5 md:p-0">
        {MANAGEMENT.map((member) => (
          <ManagementCard key={member.name} {...member} />
        ))}
      </div>

      <div className="h-56 overflow-hidden">
        {/* // ? h-[241px], h-56 and overflow-hidden together removes scrollbar in the bottom */}
        <ul className="mx-auto flex h-[241px] max-w-7xl snap-x snap-mandatory gap-5 overflow-auto px-8 py-8 md:justify-center  md:px-0">
          {teamNames.map((team, index) => {
            return (
              <li
                key={index}
                className="relative aspect-[7/5] h-full shrink-0  snap-center overflow-hidden rounded-md bg-white ring-2 ring-black/5"
              >
                <TeamCard team={team} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Team;
