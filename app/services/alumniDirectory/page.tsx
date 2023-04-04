import Header from 'app/Header';
import Directory from './Directory';

const page = () => {
  return (
    <main className="min-h-screen px-5 md:px-10">
      <Header title="Alumni Directory" />
      <Directory />
    </main>
  );
};

export default page;
