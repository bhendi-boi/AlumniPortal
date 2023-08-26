'use client';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
export const AnimationWrapper = ({
  newsArticles,
}: {
  newsArticles: {
    title: string;
    time: string;
    id: number;
  }[];
}) => {
  return (
    <motion.section
      initial={{ y: '8vh', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      aria-labelledby="newsroom"
      className="w-full rounded-md border border-background md:max-w-3xl"
    >
      <h2
        id="newsroom"
        className="border-b border-background px-5 py-2 text-xl font-medium uppercase text-nav-blue"
      >
        NewsRoom
      </h2>

      <ul className="divide-y divide-background">
        {newsArticles?.map((newsArticle) => {
          return (
            <li key={newsArticle.title} className="">
              <NavLink
                variant="newsroom"
                title={`Go to ${newsArticle.title}`}
                href={`/newsroom/${newsArticle.id}`}
              >
                <h3 className="flex-1 text-black">{newsArticle.title}</h3>
                <p className="text-sm text-secondary-text">
                  {newsArticle.time}
                </p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </motion.section>
  );
};
