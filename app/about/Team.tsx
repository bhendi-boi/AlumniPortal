import TeamMemberCard from './TeamMemberCard';
import { CORE_TEAM, EVENT_MANAGEMENT_TEAM } from 'content/about';
import { CiMail } from 'react-icons/ci';

const Team = () => {
  const teamNames = [
    {
      icon: <CiMail className="h-12 w-12" />,
      name: 'Event Management',
    },
    {
      icon: <CiMail className="h-12 w-12" />,
      name: 'Public Relations',
    },
    {
      icon: <CiMail className="h-12 w-12" />,
      name: 'Alumni Relations',
    },
    {
      icon: <CiMail className="h-12 w-12" />,
      name: 'Operations',
    },
  ];
  return (
    <section className="mx-auto my-8 max-w-5xl md:my-16">
      <header className="mx-auto mb-4 max-w-3xl text-center">
        <h2 className="relative inline text-center font-lora text-2xl font-medium before:absolute before:right-full before:top-1/2 before:h-px before:w-0 before:-translate-x-8 before:bg-black before:content-[''] after:absolute after:left-full after:top-1/2 after:h-px after:w-0 after:translate-x-8 after:bg-black after:content-[''] md:before:w-96 md:after:w-96">
          Team
        </h2>
      </header>
      <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center justify-between gap-4 px-5 md:flex-row md:gap-0 md:p-0">
        {CORE_TEAM.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>

      <div className="h-56 overflow-hidden">
        {/* h-[241px], h-56 and overflow-hidden together removes scrollbar in the bottom */}
        <ul className="mx-auto flex h-[241px] max-w-5xl snap-x snap-mandatory gap-8 overflow-auto px-8 py-8 md:justify-around  md:px-0">
          {teamNames.map((team, index) => {
            return (
              <li
                key={index}
                className="flex aspect-[7/5] h-full shrink-0 snap-center flex-col items-center justify-center gap-4 rounded-md bg-white px-4 ring-2 ring-black/5"
              >
                {team.icon}
                <h3 className="font-medium">{team.name}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Team;
