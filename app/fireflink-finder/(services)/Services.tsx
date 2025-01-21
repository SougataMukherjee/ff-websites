"use client";
import React from "react";
import Style from "./Services.module.scss";
import { FinderServiceData } from "@/constants/FinderServiceData";
import Card from "@/components/card/Card";
import { Button } from "pixel-react";
const Services = () => {
  return (
    <section className={Style["ff-finder-services-wrapper"]}>
      <article className={Style["ff-finder-services-main"]}>
        <div className={Style["ff-finder-services-main-heading"]}>
          FireFlink Finder Services
        </div>
        <div className={Style["ff-finder-services-sub-heading"]}>
          FireFlink Finder has developed a comprehensive strategy for achieving
          optimal locators for UI elements, all in one place, to address general
          setbacks during element identification.
        </div>
      </article>
      <section>
        <div>
          {FinderServiceData.map((data, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <section
                key={data.id}
                className={`${Style.row} ${
                  isReverse ? Style["row-reverse"] : ""
                }`}
              >
                <div className={Style.content}>
                  <h1 className={Style["content-header"]}>{data.title}</h1>
                  <p className={Style["content-description"]}>
                    {data.description}
                  </p>
                  <ul className={Style["content-list"]}>
                    {data?.bullets?.map((d: string, i: number) => (
                      <li key={`${data.id}-${i}`}>{d}</li>
                    ))}
                  </ul>
                  <Button
                    className={Style["content-btn"]}
                    variant="primary"
                    label={data.buttonLabel}
                  />
                </div>
                <div className={Style.card}>
                  <Card
                    cardProperties={{
                      width: "540px",
                      height: "460px",
                      background: "white",
                      boxShadow: "none",
                      borderRadius: "32px",
                      margin: "20px",
                      padding: "20px",
                    }}
                    midContent={{
                      isMidContent: true,
                      content: <div className="row"></div>,
                    }}
                  />
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Services;
