"use client";
import React, { useState } from "react";
import Style from "./StackOfCard.module.scss";
import Card from "@/components/card/Card";
import { SalesForcesSolutionsCardData } from "@/constants/SalesForcesSolutionsCardData";

const StackOfCard = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = ["A", "B", "C", "D"];
  const rows = [
    "Maintenance",
    "Salesforce Competence",
    "Salesforce Ecosystem",
    "Frequent Upgrades",
  ];

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const handleRowClick = (index: number) => {
    setActiveCardIndex(index);
  };

  return (
    <section className={Style["stack-of-card-wrapper"]}>
      <div className={Style["stack-of-card-wrapper__divider"]} />

      <section className={Style["stack-of-card-wrapper__main-card"]}>
        <Card
          cardProperties={{
            width: "1120px",
            height: "340px",
            borderRadius: "16px",
            padding: "32px",
            background: "#FFFFFF",
          }}
          midContent={{
            isMidContent: true,
            content: (
              <>
                <h1>Why Test Salesforce?</h1>
                <p>
                  Salesforce is the backbone of many businesses operations,
                  including sales, marketing, customer support, and even
                  accounting. Maintaining steady interactions with customers and
                  avoiding revenue loss depend on Salesforces reliability and
                  effectiveness. The success of a corporation can be ensured by
                  conducting thorough testing to identify and fix any issues
                  that may arise in their Salesforce ecosystem.
                </p>
              </>
            ),
          }}
        />
      </section>
      <article className={Style["stack-of-card-heading"]}>
        Challenges in Salesforce Testing
      </article>
      <section className={Style["stack-of-card-section"]}>
        {/* Left Div */}
        <div className={Style["stack-of-card-section__left-div"]}>
          {rows.map((row, index) => (
            <div
              key={index}
              className={`${Style["stack-of-card-section__left-div__row"]} ${
                index === activeCardIndex
                  ? Style["stack-of-card-section__left-div__row--active"]
                  : ""
              }`}
              onClick={() => handleRowClick(index)}
            >
              <span
                className={`${
                  Style["stack-of-card-section__left-div__row__icon"]
                }
                 ${
                   index === activeCardIndex
                     ? Style[
                         "stack-of-card-section__left-div__row__icon--active"
                       ]
                     : ""
                 }`}
              ></span>
              <span
                className={Style["stack-of-card-section__left-div__row__text"]}
              >
                {row}
              </span>
            </div>
          ))}
        </div>
        {/* Right Div */}
        <div className={Style["stack-of-card-section__right-div"]}>
          <div className={Style.loading}>
            {cards.map((label, index) => (
              <Card
                key={label}
                cardProperties={{
                  className: `${Style.card} ${
                    index + 1 === activeCardIndex + 1
                      ? Style.active
                      : Style.inactive
                  }`,
                  style: { "--i": `${index + 1}` },
                  onClick: () => handleCardClick(index),
                  border: "2px solid #F6E4FF",
                  background: "#fff",
                  borderRadius: "8px",
                  padding: "16px",
                  margin: "8px",
                  width: "560px",
                  height: "480px",
                  boxShadow: "none",
                }}
                midContent={{
                  isMidContent: true,
                  content: (
                    <div>
                      {SalesForcesSolutionsCardData.map((data, index) =>
                        index + 1 === activeCardIndex + 1 ? (
                          <section key={data.id}>
                            <h1 className={Style["content-header"]}>
                              {data.title}
                            </h1>
                            <ul className={Style["content-list"]}>
                              {data.bullets.map((d: string, i: number) => (
                                <li key={`${data.id}-${i}`}>{d}</li>
                              ))}
                            </ul>
                          </section>
                        ) : null
                      )}
                    </div>
                  ),
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default StackOfCard;
