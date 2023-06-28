import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "./UserData.Provider";

export const TashilatContext = React.createContext();

export default function TashilatProvider({ children }) {
  const nextPage = useNavigate();

  const [stepOne, setStepOne] = useState({
    user_id: "",
    type: "facilities",
    title: "",
    type_f: "leasing",
    places: [
      {
        scope: "workHouse",
        address: "",
        meterage: "",
        ownership: "",
        count: "",
      },
      {
        scope: "factory",
        address: "",
        meterage: "",
        ownership: "",
        count: "",
      },
      {
        scope: "storeHouse",
        address: "",
        meterage: "",
        ownership: "",
        count: "",
      },
    ],
    history: "",
    activity: "",
    is_knowledge: true,
    confirmation: "",
    expiration: "",
    area: "",
  });
  const [stepTwo, setStepTwo] = useState({});
  const [stepThree, setStepThree] = useState({});
  const [stepFour, setStepFour] = useState({});
  const [stepFive, setStepFive] = useState({});

  return (
    <TashilatContext.Provider
      value={{
        stepOne,
        setStepOne,
        stepTwo,
        setStepTwo,
        stepThree,
        setStepThree,
        stepFour,
        setStepFour,
        stepFive,
        setStepFive,
      }}
    >
      {children}
    </TashilatContext.Provider>
  );
}
