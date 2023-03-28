import React from 'react';

const Message = () => {
  return (
    <div className="mx-auto my-8 max-w-3xl p-5 md:p-0">
      <section
        aria-labelledby="message-from-director"
        className="mb-4 rounded-lg bg-secondary-background p-4 md:ml-40"
      >
        <p className={`before:content-['"'] after:content-['"']`}>
          The Office of Alumni Affairs was established in 20XX IIITDM works to
          connect alumni, students and the institute to create a seamless
          experience through various events such as Alumni Talks, Batch-wise
          Reunions, Alumni Meets & Conferences. Our vision is to build a better
          community among alumni and students.
        </p>
        <p className="mt-2 font-bold text-contact-blue">
          Director, IIITDM Kancheepuram
        </p>
        <h2 id="message-from-director" className="sr-only">
          Message from Director, IIITDM Kancheepuram
        </h2>
      </section>
      <section
        aria-labelledby="message-from-pic"
        className="rounded-lg bg-secondary-background p-4 md:mr-40"
      >
        <p className={`before:content-['"'] after:content-['"']`}>
          The Office of Alumni Affairs was established in 20XX IIITDM works to
          connect alumni, students and the institute to create a seamless
          experience through various events such as Alumni Talks, Batch-wise
          Reunions, Alumni Meets & Conferences. Our vision is to build a better
          community among alumni and students.
        </p>
        <p className="mt-2 font-bold text-contact-blue">
          Professor In Charge (PIC)
        </p>
        <h2 id="message-from-pic" className="sr-only">
          Message from Director, IIITDM Kancheepuram
        </h2>
      </section>
    </div>
  );
};

export default Message;
