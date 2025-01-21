"use client";
import React from "react";
import Style from "./SalesForceFeature.module.scss";
import Card from "@/components/card/Card";
import { Button } from "pixel-react";
import Image from "next/image";
const SalesforceFeature = () => {
  return (
    <section className={Style["ff-homepage-feature-wrapper"]}>
      <section className={Style["ff-homepage-feature-wrapper-div"]}>
        <article className={Style["ff-homepage-feature-text-section"]}>
          <header className={Style["ff-homepage-feature-main-text"]}>
            <span className="">Automate Salesforce Testing</span>
          </header>

          <aside className={Style["ff-homepage-feature-sub-text"]}>
            <span>
              Salesforce testing is becoming increasingly complex due to its
              rapid evolution and changing business requirements. FireFlink
              provides powerful solutions to simplify and safeguard the delivery
              of applications. It allows businesses to perform thorough testing
              of Salesforce, ensuring that the platform meets expectations in
              terms of performance, reliability, and usability.
            </span>
          </aside>

          <section>
            <Button
              className={Style["ff-homepage-feature-button"]}
              variant="secondary"
              label="Schedule a free demo"
              size="large"
              onClick={() => console.log("click")}
            />
          </section>
        </article>

        <figure className={Style["ff-homepage-feature-img-section"]}>
          <Card
            cardProperties={{
              width: "400px",
              height: "400px",
              borderRadius: "16px",
              background: "#ffffff",
              style: { position: "absolute", right: "16%", top: "20%" },
            }}
            midContent={{
              isMidContent: true,
              content: <section className=""></section>,
            }}
          />
        </figure>
      </section>
      <section>
        <Image
          src={"/images/dot-vector.svg"}
          alt="dot vector"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </section>
    </section>
  );
};

export default SalesforceFeature;
