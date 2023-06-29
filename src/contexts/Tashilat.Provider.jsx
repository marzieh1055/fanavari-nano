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
        ownership: "owner",
        count: "",
      },
      {
        scope: "factory",
        address: "",
        meterage: "",
        ownership: "owner",
        count: "",
      },
      {
        scope: "storeHouse",
        address: "",
        meterage: "",
        ownership: "owner",
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
      facilities_id:"",
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
              name:"",
              university:"",
              study:"",
              position:"",
              records:""
          }
      ],
      sum_count:0,
      sum_percent:0,
      sum_cost:0,
      number:"77",
      date:"2022-04-05",
  });
  const [stepThree, setStepThree] = useState({
    
      facilities_id:"",
      products:[
          {
              name:"",
              customer:"",
              specifications:"",
              competitor:"",
              sales_amount:"",
              is_confirmation:true
          }
      ]
  
  });
  const [stepFour, setStepFour] = useState({});
  const [stepFive, setStepFive] = useState(
    //approvals
  {
      facilities_id:1,
      approvals:[
          {
              license:"test",
              reference:"test",
              date:"2022-02-02",
              validity:"test",
              description:"test"
          }
      ],
      contracts:[
          {
              subject:"test",
              name:"test",
              amount:"test",
              start:"2022-02-02",
              end:"2022-02-02",
              progress:"test"
          }
      ],
      pledges:[
          {
              type:"test",
              cost:"test",
              description:"test"
          }
      ],
      estates:[
          {
              type:"test",
              owner:"test",
              cost:"test",
              description:"test"
          }
      ]
  });

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
