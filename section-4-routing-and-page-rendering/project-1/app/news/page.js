import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h2>News Page</h2>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={`${newsItem.image}`}
                // width={auto}
                // height={auto}
                // fill={true}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
