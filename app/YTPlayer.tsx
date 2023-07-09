'use client';

const YTPlayer = ({ url }: { url: string }) => {
  const sanitizedUrl = 'https://www.youtube.com/embed/' + url.split('/').pop();
  return (
    <div className="mx-auto my-8 max-w-xl overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10">
      <iframe
        title="video"
        src={sanitizedUrl}
        allow="autoplay; picture-in-picture"
        className="skeleton aspect-video w-full"
      ></iframe>
    </div>
  );
};

export default YTPlayer;
