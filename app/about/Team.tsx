import TeamMemberCard from './TeamMemberCard';
import { CORE_TEAM, COORDINATORS } from 'content/about';

const Team = () => {
  return (
    <section className="mx-auto my-8 max-w-5xl md:my-16">
      <header className="mx-auto mb-4 max-w-3xl text-center">
        <h2 className="relative inline text-center text-2xl font-medium before:absolute before:right-full before:top-1/2 before:h-px before:w-0 before:-translate-x-8 before:bg-black before:content-[''] after:absolute after:left-full after:top-1/2 after:h-px after:w-0 after:translate-x-8 after:bg-black after:content-[''] md:before:w-96 md:after:w-96">
          Team
        </h2>
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
