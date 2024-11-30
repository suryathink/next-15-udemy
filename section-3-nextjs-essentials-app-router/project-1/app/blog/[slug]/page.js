import Link from "next/link";
import React from "react";

const BlogPage = ({ params }) => {
  return (
    <main>
      <h1>Blog</h1>
      {/* using params.slug you can access the slug value here */}
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPage;
