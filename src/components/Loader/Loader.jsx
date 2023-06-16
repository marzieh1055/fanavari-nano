import React from "react";
import "./Loader.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#e88f19"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
