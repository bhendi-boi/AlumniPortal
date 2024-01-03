import React from 'react';
import { messageFromTheDirector, messageFromTheChairman } from 'content/about';

const Message = () => {
  return (
    <div className="mx-auto my-8 max-w-7xl">
      <section
        aria-labelledby="message-from-director"
        className="mb-4 rounded-lg bg-secondary-background p-4 md:ml-40"
      >
        <h2 id="message-from-director" className="sr-only">
          Message from the Director, IIITDM Kancheepuram
        </h2>
        <p className={`before:content-['"'] after:content-['"']`}>
          {messageFromTheDirector}
        </p>
        <p className="mt-2 font-bold text-contact-blue">
          Director, IIITDM Kancheepuram
        </p>
      </section>
      <section
        aria-labelledby="message-from-pic"
        className="rounded-lg bg-secondary-background p-4 md:mr-40"
      >
        <h2 id="message-from-chairman" className="sr-only">
          Message from the PIC Alumni Affairs, IIITDM Kancheepuram
        </h2>
        <p className={`before:content-['"'] after:content-['"']`}>
          {messageFromTheChairman}
        </p>
        <p className="mt-2 font-bold text-contact-blue">
          PIC Alumni Affairs, IIITDM Kancheepuram
        </p>
      </section>
    </div>
  );
};

export default Message;
