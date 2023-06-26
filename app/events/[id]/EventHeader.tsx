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
    <header className="px-4">
      <h2 className="border-b border-background/70 pb-4 pt-6 text-3xl font-bold">
        {title}
      </h2>
      <div className="mt-2 flex items-center justify-between border-b border-background/70 py-4">
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
