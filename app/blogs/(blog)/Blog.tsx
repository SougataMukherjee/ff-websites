"use client";
import React, { useState, type FC } from "react";
import BlogCard from "@/components/BlogCard/BlogCard";
import Pagination from "@/components/Pagination/Pagination";
import Category from "@/components/Category/Category";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Search } from "pixel-react";
import Style from "./blog.module.scss";
import BlogIndiData from "@/constants/BlogIndiData";
import Image from "next/image";

const Blogs: FC = () => {
  const blogsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredBlogs = BlogIndiData.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      (blog.categories && blog.categories.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  });
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );
  const handleSearchChange = (query: string) => {
    console.log(query);
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  return (
    <div className={Style["blogs_container"]}>
      <div className={Style["main_section"]}>
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
        {filteredBlogs.length > 0 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        ) : (
          <div className={Style["no_blog_found"]}>
            <Image
              alt="no blog"
              src={"images/no-blog-found.svg"}
              width={230}
              height={250}
            />
            <p className={Style["no_blog_found_text"]}>
              No Blogs found, Please broaden your search criteria.
            </p>
          </div>
        )}
      </div>
      <div className={Style["sidebar_section"]}>
        <Search
          value={searchQuery}
          placeholder="Search here..."
          isExpand={true}
          width={300}
          onSearch={handleSearchChange}
          onClose={() => {}}
          onExpand={() => {}}
        />
        <Category
          blogs={BlogIndiData}
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Blogs;
