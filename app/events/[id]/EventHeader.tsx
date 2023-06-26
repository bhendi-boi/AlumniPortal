import NavLink from 'app/NavLink';
import { AiOutlineCalendar } from 'react-icons/ai';

type Props = {
  title: string;
  link: string;
  date: string;
  time: string;
};

const EventHeader = ({ title, link, date, time }: Props) => {
  return (
    <header className="">
      <h2 className="border-b border-background/70 pb-4 pt-6 text-xl font-bold sm:text-3xl">
        {title}
      </h2>
      <div className="mt-2 flex flex-col justify-between gap-4 border-b border-background/70 py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <AiOutlineCalendar size={40} />
          <p className="text-sm">
            {date},
            <br />
            {time} (IST)
          </p>
        </div>
        <NavLink
          variant="eventsRegister"
          href={link}
          title={`Link to ${title}`}
        >
          Register Now
        </NavLink>
      </div>
    </header>
  );
};

export default EventHeader;
