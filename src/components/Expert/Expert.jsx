import React from "react";
import Button from "../Button/Button";

const Expert = ({ name, avatar }) => {
  return (
    <div className="p-2 flex items-center bg-c-2 rounded-lg">
      <img className="w-8 h-8" src={avatar} alt="expert avatar" />
      <div className="flex-1 px-2">{name}</div>
      <Button type="assign" />
    </div>
  );
};

export default Expert;
