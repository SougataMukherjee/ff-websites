"use client";
import React, { useRef } from "react";
import Style from "./Carousel.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import { truncateText } from "pixel-react";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the structure of each slide data
interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

// The carousel data with the items structure defined above
const carouselData: CarouselItem[] = [
  {
    id: 1,
    icon: "",
    title: "Single thread Multi Channel Execution",
    description:
      "Web, Android, iOS and web service automation test steps can all be combined into a single script. A user can execute tests on several platforms simultaneously using a single automation test script.",
  },
  {
    id: 2,
    icon: "",
    title: "Mapping the Manual Testcases to Automation Scripts",
    description:
      "Users are given a one-on-one mapping of automation test-scripts to their corresponding manual test-case within FireFlink. Both the manual and automated processes are streamlined and easy to understand, with improved traceability.",
  },
  {
    id: 3,
    title: "Inbuilt Third-Party Tool Integrations",
    description:
      "FireFlink comes pre-integrated with frequently used third-party tools such as cloud-based platforms, CI-CD pipelines, defect-management tools, and collaboration tools, all of which are useful during the software-testing phase. Because the platform is very user adaptable, FireFlink has the freedom to incorporate multiple interfaces, and with open APIs, integration with new technologies is a simple endeavour.",
  },
  {
    id: 4,
    title: "Rich Report Analytics",
    description:
      "Users will receive detailed information about all of their Script or Suite executions in a visually rich, easy to read report format. They can also do in-depth configurations in a way that is more relevant to the requirements of test engineers, managers, and business users.",
  },
  {
    id: 5,
    title: "Distributed Execution",
    description:
      "FireFlink is capable of performing distributed automated test suite runs, which can speed up the execution process. Users can choose how to distribute test suites among testing machines using distributed-execution.",
  },
  {
    id: 6,
    title: "Team Collaboration with Built-in Versioning",
    description:
      "In comparison to centralised version control systems, our publish journey feature makes it simple to set up, commit, and publish test resources at any level. This procedure will considerably assist the test engineers and avoid confusion when working as a team.",
  },
  {
    id: 7,
    title: "Built-In Plugins for Custom NLP Development",
    description:
      "We have you covered if the test engineer wants to employ project-oriented NLPs for custom requirements. Simply use the built-in plug-in to connect FireFlink to your IDE. Directly import the produced NLP into FireFlink and use it for scripting. Define your own NLPs with ease.",
  },
  {
    id: 8,
    title: "Managing Pre-Post conditions & Dependencies",
    description:
      "FireFlink provides a robust UI for configuring the Pre-Post conditions assignment for test scripts. Dependencies between scripts are efficiently managed.",
  },
];

const Carousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  // Create a reference for the Slider component
  const sliderRef = useRef<Slider | null>(null);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next); // Update the active slide index before the change
    },
  };
  const goToSlide = (index: number): void => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };
  return (
    <div className={Style.carouselContainer}>
      <h2>FireFlink One-of-a-Kind Features</h2>
      <Slider {...settings} ref={sliderRef}>
        {carouselData.map((item) => (
          <div
            key={item.id}
            className={`${Style.slide} ${
              activeSlide + 1 === item.id ? Style.activeSlide : ""
            }`}
          >
            <div
              className={`${Style.contentBox}  ${
                activeSlide + 1 === item.id ? Style.activeSlide : ""
              }`}
            >
              {item?.icon ? (
                <Image
                  className={Style["slider-img"]}
                  alt="img"
                  src={"/images/fireflink-logo.svg"}
                />
              ) : (
                <div className={Style["slider-div"]} />
              )}
              <h3
                className={activeSlide + 1 === item.id ? Style.activeSlide : ""}
              >
                {item.title}
              </h3>
              <p
                className={activeSlide + 1 === item.id ? Style.activeSlide : ""}
              >
                {truncateText(item.description, 260)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className={Style.navigationButtons}>
        <button
          onClick={() => goToSlide(0)}
          className={`${Style.navButton} ${
            activeSlide === 0 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(1)}
          className={`${Style.navButton} ${
            activeSlide === 1 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 2 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 3 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 4 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 5 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 6 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
        <button
          onClick={() => goToSlide(2)}
          className={`${Style.navButton} ${
            activeSlide === 7 ? Style.active : Style.passive
          }`}
        >
          &minus; {/* Minus symbol */}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
