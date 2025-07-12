import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const ImagePage = ({ params }) => {
  const newsItemSlug = params.id;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default ImagePage;
