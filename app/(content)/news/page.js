import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default page;
