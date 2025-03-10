import { type FC, useState } from "react";
import { Typography, Icon } from "pixel-react";
import { DropDownContentProps } from "../components/MegaMenu/types";
import "@/components/MegaMenu/MegaMenu.scss";

const DropDownContent: FC<DropDownContentProps> = ({
  items,
  isProductMenu = false,
  className = "",
  isOpen,
  isMenuOpen,
  handleMouseEnter,
  handleMouseLeave,
  isTab = false,
  isMobile = false,
  handleNavigation = () => {},
}) => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(
    isTab ? "Fireflink Platform" : null
  );
  const [activeIndex, setActiveIndex] = useState<string | number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleClick = (index: number | string) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleInteraction = (category: string) => {
    if (isTab || isMobile) {
      setHoveredKey(category);
    }
  };
  const handleHover = (category: string) => {
    if (!isTab && !isMobile) {
      setHoveredKey(category);
    }
  };
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div
      className={`ff-dropdown ${className} ${isOpen ? "show" : "hide"} d-flex`}
      style={{
        background: "var(--base-bg-color)",
        display: isMobile ? "block" : "flex",
        flexWrap: isProductMenu ? "nowrap" : "wrap",
        rowGap: "15px",
        columnGap: isTab || isMobile ? "6px" : "",
        marginBottom: isMobile ? "20px" : "",
        maxWidth: isTab || isMobile ? "92vw" : "",
        maxHeight: isTab || isMobile ? "63vw" : "",
        margin: isTab || isMobile ? "10px auto 0" : "",
      }}
      onMouseEnter={handleMouseEnter}
    >
      {isProductMenu && isMobile ? (
        <div
          className={`product-menu-mobile ${
            selectedCategory ? "shift-right" : ""
          }`}
        >
          {!selectedCategory ? (
            // Left Side Menu (Initial View)
            <div className="product-menu-mobile-left">
              <ul className="product-menu-mobile-left__list">
                {Object.entries(items).map(
                  ([category, { categoryName, chip }], index) => (
                    <li
                      key={index}
                      className="list-section"
                      style={{
                        backgroundColor:
                          hoveredKey === category
                            ? "var(--ff-progress-bar-bg-color)"
                            : "var(--base-bg-color)",
                      }}
                      onClick={() => handleCategoryClick(category)}
                      onMouseEnter={() => handleHover(category)}
                    >
                      <div className="list-section-mobile">
                        <div className="list-section-inner">
                          <Icon name={"Globe_icon"} width={18} height={18} />
                          <Typography
                            fontSize={16}
                            color="var(--ff-primary-color)"
                            fontWeight="bold"
                          >
                            {category}
                          </Typography>
                          {chip && (
                            <Typography
                              as="span"
                              fontWeight="semi-bold"
                              fontSize={11}
                              className="chip-text"
                            >
                              Beta
                            </Typography>
                          )}
                        </div>
                        <div>
                          <Icon
                            name="small_icon_arrow_right"
                            className="arrow-right-icon"
                            width={24}
                            height={24}
                          />
                        </div>
                      </div>
                      <Typography
                        color="var(--toggle-disable-icon-color)"
                        className="mobile-category-name"
                      >
                        {categoryName}
                      </Typography>
                    </li>
                  )
                )}
              </ul>
            </div>
          ) : (
            // Right Side Content (After a category is selected)
            <div className="product-menu-mobile-right">
              <div className="product-menu-mobile-right-inner">
                <Icon
                  name="small_icon_arrow_right"
                  className="mobile-small-arrow-icon"
                  color="var(--ff-primary-color)"
                  onClick={handleBack}
                  width={24}
                  height={24}
                />

                <Typography
                  fontSize={14}
                  fontWeight="semi-bold"
                  className="product-menu-mobile-right-inner__span"
                >
                  {selectedCategory}
                </Typography>
              </div>
              <ul className="product-menu-mobile-right-list">
                {(items as any)[selectedCategory]?.items.map(
                  (item: any, idx: number) => (
                    <li
                      className="product-menu-mobile-right-list__li"
                      key={idx}
                      onClick={() => {
                        handleNavigation(item.url || "/default-url");
                        // handleMouseLeave?.();
                      }}
                    >
                      <div className="product-menu-section">
                        <div className="ff-align-items">
                          <Icon
                            height={24}
                            width={24}
                            name={item.icon}
                            className="product-menu-section-img"
                          />
                        </div>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Typography
                            fontSize={14}
                            color="var(--ff-primary-color)"
                            fontWeight="bold"
                          >
                            {item.title}
                          </Typography>
                          <Typography color="var(--toggle-disable-icon-color)">
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                      <div>
                        {/* <Icon
                          name="small_icon_arrow_right"
                          className="arrow-right-icon"
                          width={24}
                          height={24}
                        /> */}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : isProductMenu && isTab ? (
        <>
          {/* Left Side: Menu Items */}
          <ul className="product-menu-tab">
            {isProductMenu
              ? Object.entries(items as any).map(
                  ([category, { categoryName, chip }]: any, categoryIndex) => (
                    <li
                      key={categoryIndex}
                      style={{
                        cursor: "pointer",
                        listStyle: "none",
                        padding: "8px",
                        borderRadius: "8px",
                        margin: "0 20px 10px 0",
                        border:
                          (!hoveredKey && category === "Fireflink Platform") ||
                          hoveredKey === category
                            ? "2px solid var(--border-color)"
                            : "2px solid transparent",

                        backgroundColor:
                          hoveredKey === category
                            ? "var(--button-bg-color)"
                            : "transparent", // Highlight selected item
                      }}
                      onClick={() => handleInteraction(category)}
                      onMouseEnter={() => handleHover(category)}
                    >
                      <div className="tab-section-container">
                        <div>
                          <Icon
                            name={"Globe_icon"}
                            width={24}
                            height={24}
                            className="section-img"
                          />
                        </div>
                        <div style={{ marginTop: "4px" }}>
                          <div style={{ display: "flex", gap: "5px" }}>
                            <Typography
                              fontSize={16}
                              color="var(--ff-primary-color)"
                              fontWeight={"semi-bold"}
                            >
                              {category}
                            </Typography>

                            {chip && (
                              <Typography
                                fontSize={11}
                                fontWeight="semi-bold"
                                className="tab-chip"
                              >
                                Beta
                              </Typography>
                            )}
                          </div>
                          <Typography
                            as="div"
                            color="var(--toggle-disable-icon-color)"
                          >
                            {categoryName}
                          </Typography>
                        </div>
                      </div>
                    </li>
                  )
                )
              : (items as any).map((item: any, index: any) => (
                  <li
                    key={index}
                    className="tab-pointer"
                    onMouseEnter={() => setHoveredKey(item.title)}
                  >
                    <Typography
                      color="var(--toggle-disable-icon-color)"
                      fontSize={14}
                      fontWeight={"semi-bold"}
                    >
                      {item.title}
                    </Typography>
                  </li>
                ))}
          </ul>
          <div className="product-menu-tab-border"></div>
          {/* Right Side: Hovered Item Data */}
          <div
            style={{
              display: isMenuOpen ? "block" : "flex",
              flexWrap: "wrap",
              flex: isMenuOpen ? 1.5 : 3,
              height: "max-content",
              padding: "10px",
              paddingTop: "0",
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
                        className="product-menu-tab-right"
                        onClick={() => {
                          //handleNavigation(item.url || '/default-url');
                          handleNavigation(item.url || "/default-url");
                          // handleMouseLeave?.();
                        }}
                      >
                        <div className="product-menu-tab-right__section">
                          <div>
                            <Icon
                              height={24}
                              width={24}
                              name={item.icon}
                              className="tab-section-image"
                            />
                          </div>
                          <div style={{ marginTop: "10px" }}>
                            <Typography
                              fontSize={14}
                              color="var(--ff-primary-color)"
                              fontWeight={"semi-bold"}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              as="div"
                              color="var(--toggle-disable-icon-color)"
                            >
                              {item.description}
                            </Typography>
                          </div>
                        </div>
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
                      <div key={index} className="d-flex">
                        <Icon
                          height={24}
                          width={24}
                          name={item.icon}
                          className=""
                        />

                        <div>
                          <Typography
                            fontSize={16}
                            color="var(--ff-primary-color)"
                            fontWeight={"semi-bold"}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontSize={14}
                            fontWeight={"regular"}
                            color={
                              isMenuOpen
                                ? "var(--toggle-disable-icon-color)"
                                : "var(--base-bg-color)"
                            }
                          >
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    )
                )}
          </div>
        </>
      ) : isProductMenu && !isTab && !isMobile ? (
        <>
          {/* Left Side: Menu Items */}
          <ul className="product-menu-web-left-view">
            {isProductMenu
              ? Object.entries(items as any).map(
                  ([category, { categoryName, chip }]: any, categoryIndex) => (
                    <li
                      key={categoryIndex}
                      style={{
                        cursor: "pointer",
                        listStyle: "none",
                        margin: "0 20px 10px 0",
                        border:
                          (!hoveredKey && category === "Fireflink Platform") ||
                          hoveredKey === category
                            ? "2px solid var(--border-color)"
                            : "2px solid transparent",

                        backgroundColor:
                          hoveredKey === category ||
                          (!hoveredKey && category === "Fireflink Platform")
                            ? "var(--button-bg-color)"
                            : "transparent",
                      }}
                      onClick={() => handleInteraction(category)}
                      onMouseEnter={() => handleHover(category)}
                    >
                      <div
                        style={{ display: "flex", alignItems: "flex-start" }}
                      >
                        <div className="ff-align-items">
                          <Icon
                            name={"Globe_icon"}
                            width={24}
                            height={24}
                            className="web-icon-image"
                          />
                        </div>
                        <div>
                          <Typography
                            fontSize={14}
                            color="var(--ff-primary-color)"
                            fontWeight={"semi-bold"}
                          >
                            {category}
                          </Typography>
                          {chip && (
                            <Typography
                              as="span"
                              fontWeight="semi-bold"
                              fontSize={11}
                              className="web-chip-text"
                            >
                              Beta
                            </Typography>
                          )}
                          <Typography
                            as="div"
                            color="var(--toggle-disable-icon-color)"
                          >
                            {categoryName}
                          </Typography>
                        </div>
                      </div>
                    </li>
                  )
                )
              : (items as any).map((item: any, index: any) => (
                  <li
                    key={index}
                    className="web-pointer"
                    onMouseEnter={() => setHoveredKey(item.title)}
                  >
                    <Typography
                      color="var(--toggle-disable-icon-color)"
                      fontSize={14}
                      fontWeight={"semi-bold"}
                    >
                      {item.title}
                    </Typography>
                  </li>
                ))}
          </ul>
          <div className="product-menu-web-border"></div>
          {/* Right Side: Hovered Item Data */}
          <div
            style={{
              display: isMenuOpen ? "block" : "flex",
              flexWrap: "wrap",
              flex: isMenuOpen ? 1.5 : 3,
              height: "max-content",
              paddingLeft: "20px",
              columnGap: "15px",
              rowGap: "10px",
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
                        className="d-flex product-menu-web-right hover-container"
                        onClick={() => {
                          console.log("7", item.url);

                          //handleNavigation(item.url || '/default-url');
                          handleNavigation(item.url || "/default-url");
                          // handleMouseLeave?.();
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            paddingLeft: "8px",
                            paddingTop: "8px",
                          }}
                        >
                          <div className="ff-align-items">
                            <Icon
                              height={24}
                              width={24}
                              name={item.icon}
                              className="web-logo-image"
                            />
                          </div>
                          <div>
                            <Typography
                              fontSize={14}
                              color="var(--ff-primary-color)"
                              fontWeight={"semi-bold"}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              as="div"
                              color="var(--toggle-disable-icon-color)"
                            >
                              {item.description}
                            </Typography>
                          </div>
                        </div>
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
                      <div key={index} className="d-flex">
                        <Icon
                          height={24}
                          width={24}
                          name={item.icon}
                          className="product-menu-web-left-section"
                        />

                        <div>
                          <Typography
                            fontSize={16}
                            color="var(--ff-primary-color)"
                            fontWeight={"bold"}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            fontSize={14}
                            fontWeight={"regular"}
                            color={
                              isMenuOpen
                                ? "var(--toggle-disable-icon-color)"
                                : "var(--base-bg-color)"
                            }
                          >
                            {item.description}
                          </Typography>
                        </div>
                      </div>
                    )
                )}
          </div>
        </>
      ) : (
        (items as any).map((item: any, index: number) => (
          <div
            key={index}
            className={`hover-container ${
              activeIndex === index ? "active" : ""
            }`}
            style={{
              flexBasis: isProductMenu ? "" : isMenuOpen ? "39%" : "30%",
              padding: isProductMenu ? "" : "7px 20px 7px 7px",
              position: "relative",
              marginTop: isMobile ? "10px" : "",
              marginBottom: isMobile ? "10px" : "",
            }}
            onClick={() => {
              console.log("8", item.url);

              handleInteraction(item.title);
              handleClick(index);
              handleNavigation(item.url || "/default-url");
              handleMouseLeave?.();
            }}
            onMouseEnter={() => {
              if (!isMobile && !isTab) {
                // Handle hover for desktop
                setHoveredKey(item.title);
              }
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <div className="ff-align-items">
                <Icon
                  height={24}
                  width={24}
                  name={item.icon}
                  className="product-menu-web-left-section"
                />
              </div>
              <div>
                <Typography
                  fontSize={16}
                  color="var(--ff-primary-color)"
                  fontWeight={"semi-bold"}
                >
                  {item.title}
                </Typography>
                <Typography
                  as="div"
                  color="var(--toggle-disable-icon-color)"
                  className=""
                  fontSize={14}
                  fontWeight={"regular"}
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DropDownContent;
