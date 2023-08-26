'use client';
// ! THIS COMPONENT is required to use framer motion

import { motion } from 'framer-motion';
import ActivitiesClient from './ActivitiesClient';
export const ActivitiesAnimationWrapper = ({
  data,
}: {
  data: {
    alt_text: string;
    content: string;
    id: number;
    image_height: number;
    image_link: string;
    image_width: number;
    link: string;
    summary_for_seo: string;
    time: string;
    title: string;
    video_link: string | null;
  }[];
}) => {
  return (
    <motion.section
      initial={{ y: '8vh', opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      aria-labelledby="activities"
      className="max-h-fit w-full rounded-md border border-background"
    >
      <h2
        id="activities"
        className="border-b border-background px-5 py-2 text-xl font-medium uppercase text-nav-blue"
      >
        Activities
      </h2>
      <ActivitiesClient data={data} />
    </motion.section>
  );
};
