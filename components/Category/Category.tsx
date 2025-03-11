import React, { type FC } from "react";
import Style from "./Category.module.scss";
type CategoryProps = {
  onSelect: (category: string) => void;
  selectedCategory: string;
  blogs: { categories?: string[] }[];
};
const Category: FC<CategoryProps> = ({ onSelect, selectedCategory, blogs }) => {
  const categories = [
    "All",
    "Debugging",
    "Test Data",
    "UI Element Locator",
    "Script Automation",
    "Script Manual",
    "Report, Analytics, and Dashboards",
    "Natural Language Processing (NLP’s)",
    "Categories of Tests",
    "Integrations with Other Tools (Jira, Jenkins)",
    "Tool Comparison",
  ];
  const getCategoryCount = (category: string) => {
    if (category === "All") {
      return blogs.length;
    }
    return blogs.filter(
      (blog) => blog.categories && blog.categories.includes(category)
    ).length;
  };
  return (
    <div className={Style["category_section"]}>
      <h3>Categories</h3>
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => onSelect(category)}
          className={`${Style["category_item"]} ${
            selectedCategory === category ? Style["active"] : ""
          }`}
        >
          <div className={Style["category_section_text"]}>
            <h3
              className={
                selectedCategory === category
                  ? "active-class"
                  : "in-active-class"
              }
            >
              {category}
            </h3>
            <h3
              className={
                selectedCategory === category
                  ? "active-class"
                  : "in-active-class"
              }
            >
              ({getCategoryCount(category)})
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
