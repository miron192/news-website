import Link from "next/link";
import React from "react";

const NewsList = ({ news }) => {
  return (
    <div>
      <ul className="news-list">
        {news.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
