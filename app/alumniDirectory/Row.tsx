import { AlumniDetails } from 'types';

type CardProps = AlumniDetails;

const Row = ({ name, degree, year, department }: CardProps) => {
  const degrees = degree.split('+');
  const departments = department.split('+');

  return (
    <tr className="text-medium flex flex-col gap-1 border-b px-5 py-2 md:flex-row md:items-center md:px-10 first:md:pt-2">
      <td className="max-h-full md:w-full">{name}</td>
      <td className="md:w-full">
        <ul className="text-xs text-secondary-text">
          {degrees.map((value, index) => {
            return (
              <li key={value} className="">
                <span className="">{degrees[index]}, </span>
                <span>{departments[index]}</span>
              </li>
            );
          })}
        </ul>
      </td>
    </tr>
  );
};

export default Row;
