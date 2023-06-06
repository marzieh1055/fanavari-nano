import React from "react";
import Dropdown from "./Dropdown";

const Sidebar = ({objects}) => {
  
  return (
    <section className="w-c-3 bg-c-2 h-c-5 sticky top-6 p-6 rounded-3xl">
      <div className="mb-6">
        <img width={120} className="mx-auto " src="/src/assets/imges/image 2.png" alt="" />
      </div>
      <div className="mb-6">
        <img className="mx-auto" src="/src/assets/imges/Line 1.png" alt="" />
      </div>
      <div className="mb-6">
        <h1 className="font-bold text-center">داشبورد</h1>
      </div>
        {
          objects && objects.map((item , index) => <Dropdown key={index} title={item.title} itemsList={item.drop} />)
        }
    </section>
  );
};

export default Sidebar;
