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
  const [stepTwo, setStepTwo] = useState(
    //shareholder
  {
      facilities_id:1,
      shareholders:[
        {
          name:"test",
          type:"genuine",
          n_certificate:"test",
          n_national:"test",
          count:"4",
          percent:"5",
          cost:"12",
          education:"test"
        },
      ],
      sum_count:"44",
      sum_percent:"55",
      sum_cost:"66",
      number:"77",
      date:"2022-04-05",
      residences:[
        {
          name:"test",
          position:"test",
          address:"test"
        }
      ],
      manpowers:[
          {
              name:"test",
              position:"test",
              level_education:"test",
              study:"test",
              type_contract:"full",
              work_experience:"44",
              important:"test"
          }
      ],
      educational:[
          {
              name:"test",
              university:"test",
              study:"test",
              position:"test",
              records:"test"
          }
      ]
  });
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
