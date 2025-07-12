import Back from "@/components/Back";
import { getNewsItem } from "@/lib/news";

import { notFound, useRouter } from "next/navigation";
import React from "react";

const InterceptedImagePage = async ({ params }) => {
  const newsItemSlug = params.id;
  const newsItem = await getNewsItem(newsItemSlug);
  if (!newsItem) {
    return notFound();
  }
  return (
    <>
      <Back />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
