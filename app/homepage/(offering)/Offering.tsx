"use client";
import React, { useState, useEffect, useCallback, type FC } from "react";
import "./Offering.scss";
import Image from "next/image";
import Card from "@/components/card/Card";
import { OFFERING } from "@/constants/HomePageOffering";
import { OfferingState } from "@/types/HomePageOffering";
const Offering: FC = () => {
  const [offerings, setOfferings] = useState<OfferingState>({
    showTrainingHover: true,
    showAuditHover: false,
    showExpressMethodologyHover: false,
    showE2EAutomationHover: false,
    showTraditionalToolHover: false,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isManual, setIsManual] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const updateOfferings = useCallback(
    (index: number) => {
      const keys = Object.keys(offerings) as (keyof OfferingState)[];
      const updatedOfferings = keys.reduce((acc, key, i) => {
        acc[key] = i === index;
        return acc;
      }, {} as OfferingState);
      setOfferings(updatedOfferings);
      setCurrentIndex(index);
    },
    [offerings]
  );

  useEffect(() => {
    if (isManual || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % OFFERING.length;
        updateOfferings(nextIndex);
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isManual, updateOfferings, isHovered]);

  const handleOfferingClick = (offeringKey: string, index: number) => {
    setIsManual(true);
    updateOfferings(index);
    setTimeout(() => setIsManual(false), 2000);
  };
  const activeOffering = OFFERING[currentIndex];
  return (
    <section>
      <section className="ff-homepage-offering-brand-section">
        <div className="ff-homepage-offering-brand-text">
          <div className="ff-homepage-offering-brand-main-text">
            Helping Leading Brands Release{" "}
            <span className="highlight-text">Software Faster</span>
          </div>
          <div className="ff-homepage-offering-brand-sub-text">
            <span className="highlight-text">20M +</span> automated tests and
            counting!
          </div>
        </div>
        <div
          className="ff-homepage-offering-brand-icons"
          style={{ overflow: "hidden", maxWidth: "100%" }}
        >
          <Image
            src={"/images/offering-brand-one.svg"}
            width={1156}
            height={720}
            alt="offering-brand-one"
            className="img"
          />
          <Image
            src={"/images/offering-brand-two.svg"}
            width={1156}
            height={720}
            alt="offering-brand-two"
            className="img"
          />
          <Image
            src={"/images/offering-brand-three.svg"}
            width={1156}
            height={720}
            alt="offering-brand-three"
            className="img"
          />
          <Image
            src={"/images/offering-brand-four.svg"}
            width={1156}
            height={720}
            alt="offering-brand-four"
            className="img"
          />
        </div>
      </section>
      <section className="ff-homepage-offering-skills">
        <div className="ff-homepage-offering-text">
          <div className="ff-homepage-offering-heading-text">
            FireFlink <span className="highlight-text">360 Offering </span>
          </div>
          <div className="ff-homepage-offering-sub-text">
            <span>
              Our vast testing expertise allows us to provide a holistic
              solution to fulfil all of your testing needs in one
            </span>{" "}
            <span>
              place. Explore our offerings to get started with FireFlink now.
            </span>
          </div>
        </div>
        <div className="ff-homepage-offering-training">
          <div className="ff-homepage-offering-training-stepper">
            {Object.keys(offerings).map((key, index) => {
              const typedKey = key as keyof OfferingState;
              const isActive = offerings[typedKey];
              const offering = OFFERING[index];

              return (
                <div
                  className="ff-homepage-offering-training-progress"
                  key={key}
                >
                  {index !== 0 && (
                    <div
                      className={
                        activeOffering?.ID === index + 1
                          ? `ff-homepage-offering-training-progress-line ${
                              activeOffering?.ID === index + 1 ? "animated" : ""
                            }`
                          : "ff-homepage-offering-training-progress-invisible-line"
                      }
                    ></div>
                  )}
                  <div
                    className={`ff-homepage-offering-training-progress-img ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() => handleOfferingClick(key, index)}
                  >
                    <Image
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      src={
                        isActive
                          ? offering.ACTIVE_IMG?.src ||
                            "/images/default-active.svg"
                          : offering.PASSIVE_IMG?.src ||
                            "/images/default-passive.svg"
                      }
                      height={100}
                      width={100}
                      alt={
                        isActive
                          ? offering.ACTIVE_IMG?.alt ||
                            "Default active alt text"
                          : offering.PASSIVE_IMG?.alt ||
                            "Default passive alt text"
                      }
                    />
                    <div className="ff-homepage-offering-training-progress-img-text">
                      {offering.HEADING}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Card
            cardProperties={
              {
                // width: "400px",
                // height: "450px",
                // background: "#f9f9f9",
                // borderRadius: "12px",
                // boxShadow: "0 6px 10px rgba(0,0,0,0.15)",
                // padding: "20px",
              }
            }
            midContent={{
              isMidContent: true,
              content: (
                <div
                  className="ff-homepage-offering-training-section"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div key={activeOffering?.ID}>
                    <div className="ff-homepage-offering-training-section-heading">
                      {activeOffering?.HEADING}
                    </div>
                    <div
                      className="ff-homepage-offering-training-section-sub"
                      dangerouslySetInnerHTML={{
                        __html: activeOffering?.DESCRIPTION || "",
                      }}
                    />
                  </div>
                </div>
              ),
            }}
            isSkeleton={false}
          />
        </div>
      </section>
    </section>
  );
};

export default Offering;
