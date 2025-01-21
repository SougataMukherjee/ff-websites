import React, { useState } from "react";

import { Typography } from "pixel-react";
import Img from "@/public/images/dropdown-icon.svg";
import { useRouter } from "next/navigation";

interface DropDownContentProps {
  items:
    | {
        title: string;
        description: string;
        icon: string;
        url: string;
      }[]
    | {
        [category: string]: {
          categoryName: string;
          items: {
            title: string;
            description: string;
            icon: string;
            url: string;
          };
        }[];
      };
  isProductMenu?: boolean; // Flag to determine type of menu
  className?: string; // Additional class name
  handleMouseEnter?: () => void;
  handleMouseLeave?: () => void;
  isOpen: boolean;
}

const DropDownContent: React.FC<DropDownContentProps> = ({
  items,
  isProductMenu = false,
  className = "",
  isOpen,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const router = useRouter();
  const handleNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <div
      className={`ff-dropdown ${className} ${isOpen ? "show" : "hide"} d-flex`}
      style={{
        background: "white",
        display: "flex",
        flexWrap: isProductMenu ? "nowrap" : "wrap",
        rowGap: "20px",
      }}
      onMouseEnter={handleMouseEnter}
    >
      {isProductMenu ? (
        <>
          {/* Left Side: Menu Items */}
          <ul style={{ flex: 1, padding: 0 }} className="">
            {isProductMenu
              ? Object.entries(
                  items as {
                    [category: string]: {
                      categoryName: string;
                      items: {
                        title: string;
                        description: string;
                        icon: string;
                        url: string;
                      };
                    }[];
                  }
                ).map(([category, { categoryName }], categoryIndex) => (
                  <li
                    key={categoryIndex}
                    style={{
                      cursor: "pointer",
                      listStyle: "none",
                      margin: "0 20px 10px 0",
                      border:
                        (!hoveredKey && category === "Fireflink Platform") ||
                        hoveredKey === category
                          ? "2px solid #fce4ff"
                          : "2px solid transparent",

                      backgroundColor:
                        hoveredKey === category ? "#fcf6ff" : "transparent", // Highlight selected item
                    }}
                    onMouseEnter={() => setHoveredKey(category)}
                  >
                    <img
                      width={18}
                      height={18}
                      src={Img}
                      alt={`icon`}
                      style={{ position: "relative", top: "2px" }}
                    />
                    <Typography
                      fontSize={16}
                      color="#29102D"
                      fontWeight={"bold"}
                    >
                      {category}
                    </Typography>
                    <Typography as="div" fontSize={12} fontWeight={"regular"}>
                      {categoryName}
                    </Typography>
                  </li>
                ))
              : (
                  items as {
                    [category: string]: {
                      categoryName: string;
                      items: {
                        title: string;
                        description: string;
                        icon: string;
                        url: string;
                      };
                    }[];
                  }
                ).map((item, index) => (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredKey(item.title)}
                  >
                    <Typography fontSize={14} fontWeight={"semi-bold"}>
                      {item.title}
                    </Typography>
                  </li>
                ))}
          </ul>
          <div style={{ borderLeft: "1px solid #ddd" }}></div>
          {/* Right Side: Hovered Item Data */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flex: 3,
              height: "max-content",
              padding: "10px",
            }}
          >
            {/* Conditional Rendering for ProductMenu */}
            {isProductMenu
              ? Object.entries(
                  items as {
                    [category: string]: {
                      categoryName: string;
                      items: {
                        title: string;
                        description: string;
                        icon: string;
                        url: string;
                      };
                    }[];
                  }
                ).map(([category, value]) => {
                  const subItems = (value as any)?.items;
                  const isActive =
                    category === hoveredKey ||
                    (!hoveredKey && category === "Fireflink Platform");
                  return (
                    isActive &&
                    Array.isArray(subItems) &&
                    subItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="d-flex gap10 mb10 hover-div"
                        style={{
                          flexBasis: "50%",
                          height: "63px",
                          position: "relative",
                          padding: "7px",
                        }}
                        onClick={() => {
                          handleNavigation(item.url || "/default-url");
                          handleMouseLeave?.();
                        }}
                      >
                        <img
                          width={18}
                          height={18}
                          src={item.icon}
                          alt={`${item.title}-image`}
                          style={{ position: "relative", top: "2px" }}
                        />

                        <Typography
                          fontSize={14}
                          color="#29102D"
                          fontWeight={"bold"}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          as="div"
                          fontSize={12}
                          fontWeight={"regular"}
                        >
                          {item.description}
                        </Typography>
                      </div>
                    ))
                  );
                })
              : (
                  items as {
                    title: string;
                    description: string;
                    icon: string;
                    url: string;
                  }[]
                ).map(
                  (item, index) =>
                    item.title === hoveredKey && (
                      <div key={index} className="d-flex gap10">
                        <img
                          width={18}
                          height={18}
                          src={item.icon}
                          alt={`${item.title}-icon`}
                          style={{ position: "relative", top: "2px" }}
                        />
                        <div>
                          <Typography
                            fontSize={16}
                            color="#29102D"
                            fontWeight={"bold"}
                          >
                            {item.title}
                          </Typography>
                          <Typography fontSize={14} fontWeight={"regular"}>
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    )
                )}
          </div>
        </>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className="hover-div"
            style={{
              flexBasis: isProductMenu ? "" : "33.3%",
              padding: isProductMenu ? "" : "7px 20px 7px 7px",
              position: "relative",
            }}
            onClick={() => {
              handleNavigation(item.url || "/default-url");
              handleMouseLeave?.();
            }}
          >
            <img
              width={18}
              height={18}
              src={item.icon}
              alt={`${item.title}-icon`}
              style={{ position: "relative", top: "2px" }}
            />

            <Typography fontSize={16} color="#29102D" fontWeight={"bold"}>
              {item.title}
            </Typography>
            <Typography as="div" fontSize={14} fontWeight={"regular"}>
              {item.description}
            </Typography>
          </div>
        ))
      )}
    </div>
  );
};

export default DropDownContent;
