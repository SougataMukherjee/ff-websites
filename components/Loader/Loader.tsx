import React from "react";
import Style from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={Style["spinner_container"]}>
      <div className={Style.spinner}></div>
    </div>
  );
};

export default Loader;
