import ArticleHeader from './Header';
import ImageCard from './ImageCard';
import Navigation from './Navigation';
import clsx from 'clsx';
import { getNewsArticleData } from '../getNewsArticlesData';

const page = async ({ params }: { params: { id: string } }) => {
  const { id: idAsString } = params;
  const id = Number(idAsString);

  // ? data fetching
  const { data: rawData, error } = await getNewsArticleData();
  if (!rawData || error) {
    throw new Error('Failed to fetch news articles');
  }
  const data = rawData.find((item) => item.id === id);
  if (typeof data === 'undefined') {
    throw new Error('Index out of range');
  }
  // ? finding maxId
  const ids = rawData.map((item) => {
    return item.id;
  });
  const maxId = Math.max(...ids);

  return (
    <>
      <section className="mx-auto mb-12 min-h-screen max-w-5xl rounded-lg border border-background">
        <Navigation id={id} maxId={maxId} />
        <article className="p-8">
          <ArticleHeader title={data.title} postedOn="24 MAY, 2023" />
          <ImageCard
            src={data.image_link}
            altText={data.alt_text}
            width={data.image_width}
            height={data.image_height}
          />
          {data.content.map((para, index) => {
            return (
              <p
                className={clsx(
                  // index === 0 && 'first-letter:text-2xl ',
                  'mb-4 selection:bg-contact-blue selection:text-white',
                )}
                key={index}
              >
                {para}
              </p>
            );
          })}
        </article>
      </section>
    </>
  );
};

export default page;
