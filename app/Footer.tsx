import React from 'react';
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
const Footer = () => {
  return (
    <footer className="grid h-40 place-items-center bg-background py-10">
      <ul className="flex gap-4">
        <li>
          <CiMail size={30} />
        </li>
        <li>
          <AiFillLinkedin size={30} />
        </li>
        <li>
          <AiOutlineInstagram size={30} />
        </li>
        <li>
          <AiFillYoutube size={30} />
        </li>
      </ul>
      <p className="text-center">© Alumni Affairs IIITDM Kancheepuram 2023</p>
    </footer>
  );
};

export default Footer;
