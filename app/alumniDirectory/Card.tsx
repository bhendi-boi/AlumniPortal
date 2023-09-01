import { AlumniDetails } from 'types';

type CardProps = AlumniDetails;

const Card = ({ name, degree, year, department }: CardProps) => {
  const degrees = degree.split('+');
  const departments = department.split('+');
  console.log(departments);
  return (
    <li className="grid grid-cols-1 grid-rows-2 items-center  px-4 py-2 odd:bg-zinc-200 even:bg-white md:grid-cols-2 md:grid-rows-1">
      <p className="font-semibold">{name}</p>
      <p className="flex items-center gap-2 text-xs font-medium text-secondary-text">
        <span className="">{year} </span>
        <ul>
          {degrees.map((value, index) => {
            return (
              <li className="">
                <span className="">{degrees[index]}, </span>
                <span>{departments[index]}</span>
              </li>
            );
          })}
        </ul>
      </p>
    </li>
  );
};

export default Card;
