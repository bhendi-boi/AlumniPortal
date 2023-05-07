'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';

const Tabs = () => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);
  useEffect(() => {
    setSelectedIndex(0);
  }, []);
  return (
    <Tab.Group
      as="div"
      className="mb-8 max-w-5xl rounded-lg border border-background md:mx-auto"
    >
      <Tab.List className="flex divide-x overflow-x-auto border-b border-background">
        <Tab as={React.Fragment}>
          {({ selected }) => (
            <StyledButton selected={selected}>All</StyledButton>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <StyledButton selected={selected}>Talks</StyledButton>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <StyledButton selected={selected}>Reunions</StyledButton>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <StyledButton selected={selected}>Conferences</StyledButton>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <StyledButton selected={selected}>Others</StyledButton>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="min-h-screen">
        <Tab.Panel>Content all</Tab.Panel>
        <Tab.Panel>Content talks</Tab.Panel>
        <Tab.Panel>Content reunions</Tab.Panel>
        <Tab.Panel>Content Conferences</Tab.Panel>
        <Tab.Panel>Content others</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;

function StyledButton({
  children,
  selected,
}: {
  selected: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      className={clsx(
        'relative px-8 py-4 text-lg',
        selected && 'font-semibold text-black',
        !selected && 'font-medium text-secondary-text',
      )}
    >
      <span>{children}</span>
      {selected && (
        <motion.span
          layoutId="event-route-filter-underline"
          className="absolute bottom-0 left-0 inline-block h-0.5 w-full bg-black"
        />
      )}
    </button>
  );
}
