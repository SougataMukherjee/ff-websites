"use client";
import React from "react";
import { PLATFORM_CARD_DATA } from "@/constants/PlatformCardData";
import Style from "./PlatformCard.module.scss";
import { truncateText } from "pixel-react";
import Card from "@/components/card/Card";
import Image from "next/image";
const PlatformCard = () => {
  return (
    <section className={Style["ff-platform-card-wrapper"]}>
      <article className={Style["ff-platform-card-heading"]}>
        Unique Features of FireFlink Platform
      </article>
      <article className={Style["ff-platform-card-section"]}>
        {PLATFORM_CARD_DATA.map((data) => {
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
                  <div className={Style["ff-platform-card"]}>
                    {data?.LOGO?.src ? (
                      <Image
                        className={Style["ff-platform-card-img"]}
                        alt="img"
                        src={data?.LOGO?.src}
                        width={60}
                        height={60}
                      />
                    ) : (
                      <div className={Style["ff-platform-card-div"]}></div>
                    )}
                  </div>
                ),
              }}
              midContent={{
                isMidContent: true,
                content: (
                  <section className={Style["ff-platform-card-mid-content"]}>
                    <article
                      className={Style["ff-platform-card-mid-content-header"]}
                    >
                      {data?.HEADING}
                    </article>
                    <article
                      className={
                        Style["ff-platform-card-mid-content-description"]
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
      <div className={Style["ff-platform-test-journey"]}>
        <div className={Style["ff-platform-test-journey-div"]}></div>
      </div>
    </section>
  );
};

export default PlatformCard;
