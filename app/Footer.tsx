import Link from 'next/link';
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="relative bg-footer-background py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 flex flex-col gap-8 px-4 sm:flex-row sm:px-8 md:px-12 lg:px-16">
          {/* institute links */}
          <ul className="flex w-full flex-col gap-2 text-lg">
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://iiitdm.ac.in/"
              >
                Institute Website
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.placements.iiitdm.ac.in/"
              >
                Institute Placement cell
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.madeit.iiitdm.ac.in/"
              >
                MaDeIT website
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.techsac.iiitdm.ac.in/"
              >
                Technical Affairs
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="http://hostel.iiitdm.ac.in/"
              >
                Hostel Office
              </Link>
            </li>
          </ul>
          {/* contact */}
          <div className="flex w-full flex-col gap-0.5 text-lg md:text-right">
            <p className="mb-1 font-lora text-3xl font-bold tracking-wide text-nav-blue">
              Alumni Affairs
            </p>
            <p>A-103, Admin Block,</p>
            <p>IIITDM Kancheepuram,</p>
            <p>Chennai - 600 127</p>
            <ul className="flex gap-4 pt-2 sm:justify-end">
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
                  title="Our LinkedIn Page"
                >
                  <AiFillLinkedin size={30} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/alumniaffairsiiitdm/"
                  target="_blank"
                  rel="norefer"
                  title="Our Instagram Page"
                >
                  <AiOutlineInstagram size={30} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* icons and copyright */}
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center font-medium ">
            © {new Date().getFullYear()} Alumni Affairs, IIITDM Kancheepuram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
