"use client";
import React, { useState, useEffect } from "react";
import { FINDER_CARD_DATA } from "@/constants/FinderCardData";
import Style from "./Card.module.scss";
import { truncateText } from "pixel-react";
import Card from "@/components/card/Card";
import Image from "next/image";
const FinderCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const progressEndValue = 100;
  const progressDuration = 8000;
  useEffect(() => {
    if (!isAnimating) return;

    let progressStartValue = 0;
    const speed = progressDuration / progressEndValue;

    const progressInterval = setInterval(() => {
      progressStartValue++;
      setProgressValue(progressStartValue);

      if (progressStartValue === progressEndValue) {
        clearInterval(progressInterval);

        // Smoothly transition to the next circle
        setTimeout(() => {
          setProgressValue(0);
          setActiveIndex((prevIndex) => (prevIndex + 1) % circles.length);
        }, 100);
      }
    }, speed);

    return () => clearInterval(progressInterval);
  }, [activeIndex, isAnimating]);
  const circles = [
    {
      title: "One tool to find UI elements",
      description:
        "You Just need one tool to find UI elements across web, mobile, API and enterprise solutions.",
    },
    {
      title: "Save Time",
      description:
        "Find UI elements quickly and reduce tedious test automation processes in a matter of minutes",
    },
    {
      title: "Maintain Effortlessly",
      description:
        "Auto generates element name and type, which are editable by also removing duplicates.",
    },
    {
      title: "Get Optimal Locators",
      description:
        "Find several optimal locators for a single element to reduce element failure rate.",
    },
    {
      title: "Use it Independently",
      description:
        "Locators provided from within Fireflink Finder can be used outside of the Fireflink platform to fit your existing processes.",
    },
  ];

  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <section className={Style["ff-finder-card-wrapper"]}>
      <section>
        <article className={Style["ff-finder-card-heading"]}>
          Why Choose FireFlink Finder?
        </article>
        <article>
          For quickly retrieving locators for UI elements, try FireFlink Finder,
          an incredibly user-friendly tool. With this tool, you can quickly and
          easily find the best UI element locators with just a few clicks.
        </article>
        <div>
          <div className={Style.wrapper}>
            {circles.map((circle, index) => (
              <div
                key={index}
                className="test"
                onMouseEnter={
                  index === activeIndex ? handleMouseEnter : () => {}
                }
                onMouseLeave={
                  index === activeIndex ? handleMouseLeave : () => {}
                }
                style={{
                  width: index === activeIndex ? "290px" : "",
                  height: index === activeIndex ? "290px" : "",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: "20",
                  overflow: "hidden",
                  display: "flex",
                  background:
                    index === activeIndex
                      ? `conic-gradient(#29102d ${
                          3.6 * progressValue
                        }deg, #fff 0deg)`
                      : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf:
                    index === activeIndex
                      ? ""
                      : index % 2 === 0
                      ? "start"
                      : "end",
                }}
              >
                <div
                  key={index}
                  className={`${Style.circle} ${
                    index === activeIndex ? Style.active : ""
                  }`}
                >
                  <div className={Style.content}>
                    {index === activeIndex ? (
                      <>
                        <div className={Style.icon}></div>
                        <h4>{circle.title}</h4>
                        <p>{circle.description}</p>
                      </>
                    ) : (
                      <h4>{circle.title}</h4>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <article className={Style["ff-finder-card-heading"]}>
        Unique Features of FireFlink Finder
      </article>
      <article className={Style["ff-finder-card-section"]}>
        {FINDER_CARD_DATA.map((data) => {
          return (
            <Card
              key={data.ID}
              cardProperties={{
                width: "356px",
                height: "364px",
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "none",
                padding: "0",
                margin: "0",
              }}
              headerContent={{
                isHeader: true,
                content: (
                  <div className={Style["ff-finder-card"]}>
                    {data?.LOGO?.src ? (
                      <Image
                        className={Style["ff-finder-card-img"]}
                        alt="img"
                        src={data?.LOGO?.src}
                        width={60}
                        height={60}
                      />
                    ) : (
                      <div className={Style["ff-finder-card-div"]}></div>
                    )}
                  </div>
                ),
              }}
              midContent={{
                isMidContent: true,
                content: (
                  <section className={Style["ff-finder-card-mid-content"]}>
                    <article
                      className={Style["ff-finder-card-mid-content-header"]}
                    >
                      {data?.HEADING}
                    </article>
                    <article
                      className={
                        Style["ff-finder-card-mid-content-description"]
                      }
                    >
                      {truncateText(data?.DESCRIPTION, 190)}
                    </article>
                  </section>
                ),
              }}
              isSkeleton={false}
            />
          );
        })}
      </article>
      <div className={Style["ff-finder-test-journey"]}>
        <div className={Style["ff-finder-test-journey-div"]}></div>
      </div>
    </section>
  );
};

export default FinderCard;
