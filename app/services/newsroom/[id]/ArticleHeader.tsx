const ArticleHeader = ({
  title,
  postedOn,
}: {
  title: string;
  postedOn: string;
}) => {
  return (
    <header className="mb-4">
      <h2 className="mb-1 text-xl font-bold md:text-3xl">{title}</h2>
      <p className="text-xs text-secondary-text md:text-sm">
        Posted on {postedOn}
      </p>
    </header>
  );
};

export default ArticleHeader;
