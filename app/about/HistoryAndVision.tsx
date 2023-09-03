import React from 'react';
import Image from 'next/image';
const HistoryAndVision = () => {
  return (
    <section aria-labelledby="history" className="mx-auto max-w-3xl">
      <Image
        src="/convocation.png"
        alt="Convocation 2023"
        width={711}
        height={400}
      />
      <h2 className="mb-2 mt-8 font-lora text-2xl font-bold">
        History and Vision
      </h2>
      <p>
        The Office of Alumni Affairs was established in 20XX IIITDM works to
        connect alumni, students and the institute to create a seamless
        experience through various events such as Alumni Talks, Batch-wise
        Reunions, Alumni Meets & Conferences. Our vision is to build a better
        community among alumni and students.
      </p>
    </section>
  );
};

export default HistoryAndVision;
