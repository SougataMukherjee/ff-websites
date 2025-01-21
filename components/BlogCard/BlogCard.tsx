import React, { type FC } from "react";
import { useRouter } from "next/navigation";
import Style from "./BlogCard.module.scss";
import Image from "next/image";
import { Button } from "pixel-react";

type BlogCardProps = {
  readmore_url: string;
  title: string;
  content: string;
  duration: string;
  blogDate: string;
  author: string;
};

const BlogCard: FC<BlogCardProps> = ({
  readmore_url,
  title,
  content,
  duration,
  blogDate,
  author,
}) => {
  const router = useRouter();

  const handleViewMore = () => {
    router.push(`/blogs/${readmore_url}`);
  };

  return (
    <section className={Style["BlogCard_wraper_section"]}>
      <div className={Style["BlogCard_image_section"]}>
        <Image
          alt="blog img"
          src={"/images/Blog1.svg"}
          width={233}
          height={156}
        />
        <span className={Style["BlogCard_image_span"]}>{duration}</span>
      </div>
      <div className={Style["BlogCard_text_section"]}>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className={Style["BlogCard_button_section"]}>
          <h5>
            {blogDate} | {author}
          </h5>
          <Button
            className={Style["view_more_button"]}
            variant="primary"
            label="Read more"
            onClick={handleViewMore}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
