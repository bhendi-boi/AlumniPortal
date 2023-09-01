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
      name: 'Public Relations and Marketing',
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

      <div className="h-44 overflow-hidden">
        <ul className="mx-auto flex max-w-5xl justify-between gap-4 overflow-auto pb-4">
          {teamNames.map((team) => {
            return (
              <li className="flex aspect-[7/5] h-40 shrink-0 flex-col items-center justify-center gap-4 bg-white px-4 drop-shadow-md">
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
