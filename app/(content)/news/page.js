import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

const page = async () => {
  const news = await getAllNews();
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
};

export default page;
