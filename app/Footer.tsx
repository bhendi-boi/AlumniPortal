import React from 'react';
import Link from 'next/link';
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
          <Link
            href={`mailto:@alumni.affairs@iiitdm.ac.in`}
            target="_blank"
            rel="norefer"
            title="Mail us ?"
          >
            <CiMail size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/company/alumni-affairs-iiitdm/"
            target="_blank"
            rel="norefer"
            title="IIITDM Alumni Affairs LinkedIn Page"
          >
            <AiFillLinkedin size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/alumniaffairsiiitdm/"
            target="_blank"
            rel="norefer"
            title="IIITDM Alumni Affairs Instagram Page"
          >
            <AiOutlineInstagram size={30} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@alumniiiitdmkancheepuram7870"
            target="_blank"
            rel="norefer"
            title="IIITDM Alumni Affairs Youtube Channel"
          >
            <AiFillYoutube size={30} />
          </Link>
        </li>
      </ul>
      <p className="text-center">© Alumni Affairs IIITDM Kancheepuram 2023</p>
    </footer>
  );
};

export default Footer;
