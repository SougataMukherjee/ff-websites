import React from "react";
import Style from "./SalesForceCard.module.scss";
import {
  SalesForceTestingData,
  SalesForceFeatureData,
} from "@/constants/salesForceData";
import Card from "@/components/card/Card";
const SalesForceCard = () => {
  return (
    <section className={Style["sales-force-card-wrapper"]}>
      <article>Challenges in Salesforce Testing</article>
      <section>
        <div>
          {SalesForceTestingData.map((data, index) => {
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
      <section>
        <article>Key Features</article>
        <div className={Style["feature-div"]}>
          {SalesForceFeatureData.map((data, index) => (
            <Card
              key={index}
              cardProperties={{
                width: "548px",
                height: "180px",
                background: "white",
                boxShadow: "none",
                borderRadius: "16px",
                margin: "20px",
                padding: "20px",
              }}
              midContent={{
                isMidContent: true,
                content: (
                  <div className="">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                  </div>
                ),
              }}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default SalesForceCard;
