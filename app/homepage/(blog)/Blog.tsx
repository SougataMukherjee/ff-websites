"use client";
import React, { useState, type FC } from "react";
import Card from "@/components/card/Card";
import "./Blog.scss";
import Image from "next/image";
import { BLOG } from "@/constants/HomePageBlog";
import { Button, Icon, truncateText } from "pixel-react";
const Blog: FC = () => {
  const [marginLeft, setMarginLeft] = useState<number>(0);
  const cardWidth = 300;
  const visibleArea = 300;
  const totalWidth = 930;
  const maxScrollRight = -(totalWidth - visibleArea);
  const scrollLeft = () => {
    setMarginLeft((prev: number) => Math.min(prev + cardWidth, 0));
  };

  const scrollRight = () => {
    setMarginLeft((prev: number) => Math.max(prev - cardWidth, maxScrollRight));
  };
  return (
    <section className="ff-homepage-blog-wrapper">
      <div className="ff-homepage-blog-text-section">
        <div>
          {"FireFlink's"} intuitive
          <span className="highlight-text">features</span> are designed to be{" "}
        </div>
        <div>
          loved by your <span className="highlight-text">QA team!</span>
        </div>
      </div>
      <div className="ff-homepage-blog-btn-section">
        <Button
          label="FireFlink Platform"
          variant="primary"
          size="large"
          style={{ width: "224px", height: "54px", borderRadius: "12px" }}
        />
        <Button
          label="FireFlink Cloud"
          variant="secondary"
          size="large"
          style={{ width: "224px", height: "54px", borderRadius: "12px" }}
        />
      </div>
      <div className="ff-homepage-blog-accordion-section"></div>
      <div className="ff-homepage-blog-section">
        <div className="ff-homepage-blog-heading">Our Latest Blog’s</div>
        <section className="ff-homepage-blog-container">
          <div
            className="ff-homepage-blog"
            style={{
              marginLeft: `${marginLeft}px`,
              transition: "margin 0.3s ease",
            }}
          >
            {BLOG.map((blog) => {
              return (
                <Card
                  key={blog.ID}
                  cardProperties={{
                    width: "346px",
                    height: "fit-content",
                    background: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
                    padding: "0",
                    margin: "0",
                  }}
                  headerContent={{
                    isHeader: true,
                    content: (
                      <>
                        <Image
                          src={blog.LOGO?.src ?? "images/fireflink-logo.svg"}
                          alt={"homepage-blog-img"}
                          width={346}
                          height={175}
                        />
                      </>
                    ),
                  }}
                  midContent={{
                    isMidContent: true,
                    content: (
                      <section className="ff-homepage-blog-mid-content">
                        <article className="ff-homepage-blog-mid-content-heading">
                          {blog?.HEADING}
                        </article>
                        <article className="ff-homepage-blog-mid-content-sub">
                          {truncateText(blog?.DESCRIPTION, 140)}
                        </article>
                        <Button
                          className="ff-homepage-blog-mid-content-button"
                          variant="primary"
                          label={blog.BUTTON_TEXT}
                          size="large"
                          onClick={() => console.log("click")}
                        />
                      </section>
                    ),
                  }}
                  isSkeleton={false}
                />
              );
            })}
          </div>
        </section>
        <div className="ff-homepage-blog-arrow-btn">
          <Icon name="left_arrow_icon" onClick={scrollLeft} />
          <Icon name="right_arrow_icon" onClick={scrollRight} />
        </div>
        <div className="ff-homepage-blog-btn">
          <Button variant="primary" label="View all Blogs" />
        </div>
      </div>
    </section>
  );
};

export default Blog;
