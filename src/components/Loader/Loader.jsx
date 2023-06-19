import React from "react";
import "./Loader.css";
import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{display : "flex" , flexDirection : "column" , alignItems : "center"}} className="loader">
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
      <span>درحال پردازش...</span>
    </div>
  );
};

export default Loader;
