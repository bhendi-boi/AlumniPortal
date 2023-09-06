'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';

const Tabs = () => {
  return (
    <Tab.Group
      as="div"
      className="mb-8 max-w-7xl rounded-lg border border-background md:mx-auto md:mb-16"
    >
      <div className="h-16 overflow-hidden border-b border-background">
        <Tab.List className="flex h-20 divide-x overflow-x-auto pb-4">
          <Tab>
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
      </div>
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
          className="absolute -bottom-px left-0 inline-block h-0.5 w-full bg-black"
        />
      )}
    </button>
  );
}
