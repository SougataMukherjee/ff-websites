"use client";
import React, { type FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Icon, Typography } from "pixel-react";
import "./Navbar.scss";

import {
  ProductMenuData,
  SolutionMenuData,
  ResourceMenuData,
  DropDownMenuData,
} from "./MenuData";
import DropDownContent from "./DropDownContent";

const Navbar: FC = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState("#29102d");
  const [shadow, setShadow] = useState("none");
  const [textColor, setTextColor] = useState("#fff");
  const [hoverTextColor, setHoverTextColor] = useState("#f39c12");
  const [demoButton, setDemoButton] = useState(false);
  const [logoSrc, setLogoSrc] = useState(
    "/images/fireflink-logo-with-text.svg"
  );

  const handleMouseEnter = (menu: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    if (hoveredMenu !== menu) {
      setHoveredMenu(menu);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
      setIsOpen(false);
    }, 100);
    setCloseTimeout(timeout);
  };
  const handleDropDownMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [hoveringDropdown, setHoveringDropdown] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / totalHeight) * 100;

      if (scrollPercentage > 20) {
        setBgColor("#fff");
        setShadow("1px 1px 15px gray");
        setTextColor("#29102d");
        setLogoSrc("/images/fireflink-logo-with-text2.svg");
        setDemoButton(true);
      } else {
        setBgColor("#29102d");
        setShadow("none");
        setTextColor("#fff");
        setLogoSrc("/images/fireflink-logo-with-text.svg");
        setDemoButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className="ff-navbar-bg"
      style={{ backgroundColor: bgColor, boxShadow: shadow }}
    >
      <nav className="ff-navbar">
        <div className="logo">
          <Link href="/">
            <Image src={logoSrc} width="160" height="33" alt="FireFlink" />
          </Link>
        </div>

        <ul className="ff-menu">
          <li
            className={`ff-menu-item ${
              hoveredMenu === "products" && "menu-item-hover-bg"
            }`}
            onMouseEnter={() => {
              handleMouseEnter("products");
              setHoverTextColor("#29102d");
            }}
            onMouseOver={() => handleMouseEnter("products")}
            onMouseMove={() => handleMouseEnter("products")}
            onMouseLeave={() => {
              handleMouseLeave();
              setHoverTextColor(textColor);
            }}
          >
            <a
              // href="#home" make optional
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseOver={() => handleMouseEnter("products")}
              onMouseMove={() => handleMouseEnter("products")}
              style={{
                color: hoveredMenu === "products" ? hoverTextColor : textColor,
              }}
              className={
                hoveredMenu === "products"
                  ? "menu-item-hover-bg d-flex"
                  : " d-flex"
              }
            >
              <Typography fontSize={16} fontWeight={"medium"}>
                Products{" "}
              </Typography>
              <Icon color="" name="arrows_down_icon" />
            </a>
            {hoveredMenu === "products" && (
              <DropDownContent
                className="product-left"
                items={ProductMenuData}
                isProductMenu={true}
                isOpen={isOpen}
                handleMouseLeave={handleMouseLeave}
                handleMouseEnter={handleDropDownMouseEnter}
              />
            )}
          </li>
          <li
            className="ff-menu-item"
            onMouseEnter={() => {
              handleMouseEnter("solutions");
              setHoverTextColor("#29102d");
            }}
            onMouseOver={() => handleMouseEnter("solutions")}
            onMouseMove={() => handleMouseEnter("solutions")}
            onMouseLeave={() => {
              handleMouseLeave();
              setHoverTextColor(textColor);
            }}
          >
            <a
              href="#about"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseOver={() => handleMouseEnter("solutions")}
              onMouseMove={() => handleMouseEnter("solutions")}
              style={{
                color: hoveredMenu === "solutions" ? hoverTextColor : textColor,
              }}
              className={
                hoveredMenu === "solutions"
                  ? "menu-item-hover-bg d-flex"
                  : " d-flex"
              }
            >
              <Typography fontSize={16} fontWeight={"medium"}>
                Solutions{" "}
              </Typography>
              <Icon color="" name="arrows_down_icon" />
            </a>
            {hoveredMenu === "solutions" && (
              <DropDownContent
                className="solution-left"
                isProductMenu={false}
                items={SolutionMenuData} // This data is specifically for "Solutions"
                handleMouseLeave={handleMouseLeave}
                isOpen={isOpen}
                handleMouseEnter={handleDropDownMouseEnter}
              />
            )}
          </li>
          <li
            className="ff-menu-item"
            onMouseEnter={() => {
              handleMouseEnter("resources");
              setHoverTextColor("#29102d");
            }}
            onMouseOver={() => handleMouseEnter("resources")}
            onMouseMove={() => handleMouseEnter("resources")}
            onMouseLeave={() => {
              handleMouseLeave();
              setHoverTextColor(textColor);
            }}
          >
            <a
              href="#services"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseOver={() => handleMouseEnter("resources")}
              onMouseMove={() => handleMouseEnter("resources")}
              style={{
                color: hoveredMenu === "resources" ? hoverTextColor : textColor,
              }}
              className={
                hoveredMenu === "resources"
                  ? "menu-item-hover-bg d-flex"
                  : "menu-item-hover-bg-none d-flex"
              }
            >
              <Typography fontSize={16} fontWeight={"medium"}>
                Resources{" "}
              </Typography>
              <Icon color="" name="arrows_down_icon" />
            </a>
            {hoveredMenu === "resources" && (
              <DropDownContent
                className="resource-left"
                isProductMenu={false}
                items={ResourceMenuData}
                handleMouseLeave={handleMouseLeave}
                isOpen={isOpen}
                handleMouseEnter={handleDropDownMouseEnter}
              />
            )}
          </li>
          <li
            className="ff-menu-item"
            onMouseEnter={() => {
              handleMouseEnter("pricing");
              setHoverTextColor("#29102d");
            }}
            onMouseOver={() => handleMouseEnter("pricing")}
            onMouseMove={() => handleMouseEnter("pricing")}
            onMouseLeave={() => {
              handleMouseLeave();
              setHoverTextColor(textColor);
            }}
          >
            <a
              href="#pricing"
              onMouseEnter={() => handleMouseEnter("pricing")}
              onMouseOver={() => handleMouseEnter("pricing")}
              onMouseMove={() => handleMouseEnter("pricing")}
              className={
                hoveredMenu === "pricing"
                  ? "menu-item-hover-bg d-flex"
                  : " d-flex"
              }
              style={{
                color: hoveredMenu === "pricing" ? hoverTextColor : textColor,
              }}
            >
              <Typography fontSize={16} fontWeight={"medium"}>
                Pricing
              </Typography>
            </a>
          </li>
        </ul>
        <div className="nav-hamburger">
          <Icon name="hamburger_menu" color="#fff" onClick={toggleMenu} />
        </div>
        <div className="nav-button">
          {demoButton ? (
            <Button
              label="Schedule a free demo"
              onClick={() => {}}
              variant="secondary"
              className="signup-btn font-medium-200"
            />
          ) : (
            <Button
              label="Sign Up"
              onClick={() => {}}
              variant="primary"
              className="signin-btn"
            />
          )}
          <Button
            label="Sign In"
            onClick={() => {}}
            variant="primary"
            className="signin-btn"
          />
          <Link href="/" className="hamburger">
            <Image
              src="/images/homepage-feature-header-icon.svg"
              width={16}
              height={16}
              alt="FireFlink"
              onMouseEnter={() => setIsDropdownMenuOpen(true)}
              onMouseOver={() => setIsDropdownMenuOpen(true)}
              onMouseLeave={() =>
                setTimeout(() => {
                  if (!hoveringDropdown) setIsDropdownMenuOpen(false);
                }, 1000)
              }
            />
          </Link>
        </div>
      </nav>
      {isDropdownMenuOpen && (
        <div
          className="dropdown-menu"
          onMouseEnter={() => {
            setHoveringDropdown(true);
            setIsDropdownMenuOpen(true);
          }}
          onMouseOver={() => {
            setHoveringDropdown(true);
            setIsDropdownMenuOpen(true);
          }}
          onMouseLeave={() => {
            setHoveringDropdown(false);
            setTimeout(() => {
              if (!hoveringDropdown) setIsDropdownMenuOpen(false);
            }, 500);
          }}
          onBlur={() => {
            setHoveringDropdown(false);
          }}
          style={{ padding: "12px 14px" }}
        >
          {DropDownMenuData.map((data) => {
            return (
              <div key={data.id}>
                <div
                  className="dropdown-menu-data"
                  style={{
                    padding: "7px 0px 9px",
                    marginTop: "6px",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    color: "#9ba4af",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Image
                      height={20}
                      width={20}
                      src={data.icon}
                      alt="icon"
                      style={{ float: "left" }}
                    />
                    <h3>{data.title}</h3>
                  </div>
                  <p>{data.description}</p>
                </div>
                <div
                  style={{
                    height: "5px",
                    borderBottom:
                      data.id === DropDownMenuData.length
                        ? "none"
                        : "1px solid #9ba4af",
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      {isMenuOpen && (
        <div className={`sliding-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="menu-header">
            <Icon name="close" color="#fff" onClick={toggleMenu} />
          </div>
          <ul>
            <li>
              <Link href="#products">Products</Link>
            </li>
            <li>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li>
              <Link href="#resources">Resources</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
