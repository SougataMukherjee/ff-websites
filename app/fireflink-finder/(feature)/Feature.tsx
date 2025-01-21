import React from "react";
import Style from "./Feature.module.scss";
const Feature = () => {
  return (
    <section className={Style["ff-finder-feature-page-wrapper"]}>
      <article
        className={Style["ff-finder-feature-page-wrapper__heading"]}
      ></article>
      <article
        className={Style["ff-finder-feature-page-wrapper__box"]}
      ></article>
    </section>
  );
};

export default Feature;
