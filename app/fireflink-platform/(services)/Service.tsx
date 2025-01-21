"use client";
import React from "react";
import Style from "./Service.module.scss";
import { platformServiceData } from "@/constants/platformServiceData";
import Card from "@/components/card/Card";
import { Button } from "pixel-react";
const Service = () => {
  return (
    <section className={Style["ff-platform-services-wrapper"]}>
      <article className={Style["ff-platform-services-main"]}>
        <div className={Style["ff-platform-services-main-heading"]}>
          Platform Services
        </div>
        <div className={Style["ff-platform-services-sub-heading"]}>
          A true one-stop solution with an easy-to-use interface that allows
          anyone to automate with ease.
        </div>
      </article>
      <section>
        <div>
          {platformServiceData.map((data, index) => {
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

export default Service;
