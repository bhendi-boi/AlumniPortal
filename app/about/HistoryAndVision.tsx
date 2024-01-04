import React from 'react';
import Image from 'next/image';
const HistoryAndVision = () => {
  return (
    <section aria-labelledby="history" className="mx-auto max-w-7xl">
      <Image
        src="/convocation.png"
        alt="Convocation 2023"
        width={711}
        height={400}
        className="h-96 w-full rounded-lg object-cover"
      />
      <h2 className="mb-2 mt-8 font-lora text-2xl font-bold">
        History and Vision
      </h2>
      <p>
        Alumni Affairs at IIITDM Kancheepuram fosters a vibrant network of
        graduates, connecting them with their alma mater and each other.
        Dedicated to nurturing lifelong relationships, we organize events,
        webinars, and collaborative initiatives that facilitate knowledge
        exchange and professional growth. By fostering a sense of community and
        pride among alumni, we strive to contribute to the ongoing success of
        both individuals and the institute, creating a strong and enduring
        legacy.
      </p>
    </section>
  );
};

export default HistoryAndVision;
