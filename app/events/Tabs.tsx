'use client';
import React, { useEffect, useState } from 'react';
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
      className="mx-5 max-w-5xl rounded-lg border border-zinc-400 md:mx-auto"
    >
      <Tab.List className="border-b border-zinc-400">
        <Tab as={React.Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'border-r border-b border-zinc-400 px-8 py-4 text-secondary-text',
              )}
            >
              All
            </button>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <button
              className={clsx(
                'border-r border-b border-zinc-400 px-8 py-4 text-secondary-text',
              )}
            >
              Talks
            </button>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <button
              className={clsx(
                'border-r border-b border-zinc-400 px-8 py-4 text-secondary-text',
              )}
            >
              Reunions
            </button>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <button
              className={clsx(
                'border-r border-b border-zinc-400 px-8 py-4 text-secondary-text',
              )}
            >
              Conferences
            </button>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <button
              className={clsx(
                'border-r border-b border-zinc-400 px-8 py-4 text-secondary-text',
              )}
            >
              Others
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
