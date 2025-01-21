"use client";
import React, { type FC } from "react";
import { useParams } from "next/navigation";
import Style from "./blogDetails.module.scss";
import BlogIndiData from "@/constants/BlogIndiData";

const BlogDetails: FC = () => {
  const params = useParams();
  const id = params.id ?? "";
  const blogDetails = BlogIndiData.find((blog) =>
    blog.readmore_url.includes(`/${id}`)
  );
  console.log("params: ", blogDetails);
  if (!blogDetails) {
    return <h1>Blog Not Found</h1>;
  }

  const similarBlogs = BlogIndiData.filter(
    (blog) => blog.id !== blogDetails.id
  ).slice(0, 2);

  return (
    <div className={Style["blog_details_container"]}>
      <div className={Style["details_section"]}>
        <h1>{blogDetails.title}</h1>
        <p>{blogDetails.content}</p>
      </div>
      <div className={Style["similar_blogs_section"]}>
        <h3>Similar Blogs</h3>
        {similarBlogs.map((blog) => (
          <div key={blog.id}>
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
