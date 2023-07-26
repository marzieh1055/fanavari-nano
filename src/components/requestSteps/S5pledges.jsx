import React, { useContext, useEffect, useState } from 'react'
import { TashilatContext } from '../../contexts/Tashilat.Provider';
import { VS2shareholders } from '../../helper/validation/VS2shareholders';

export default function S5pledges({showAllErr , setSendAccept}) {
  const { stepFive, setStepFive } = useContext(TashilatContext)

  // for Validation
  const [err , setErr] = useState([{name : "پر کنید"}])
  const [showErr , setShowErr] = useState([])
      // for Validation
      console.log(err);
  useEffect(() => {
    if (showAllErr) {
        showErr.map((i , index)=> {
            const arr = showErr
            const newObj = {
              type: true,
              cost: true,
              description: true
            }
            arr[index] = newObj
            // console.log(arr);
            setShowErr(arr)
        })
    }
    // console.log("hhhhhhhh");
    console.log(showErr);

    setErr(VS2shareholders(stepFive.pledges))
    setSendAccept(prev => ({...prev , pledges : VS2shareholders(stepFive.pledges)}))
  } , [showAllErr , stepFive])

  // for Validation
  const focusHandler = (e , index) => {
    if (showErr[index]) {
        const arr = showErr
        arr[index] = {...arr[index] , [e.target.name] : true}
        setShowErr(arr)
        
    } else if (showErr[index] === undefined) {
        const arr = showErr
        arr[arr.length] = {[e.target.name] : true}
        setShowErr(arr)
    }
    setErr(VS2shareholders(stepFive.pledges))
    setSendAccept(prev => ({...prev , pledges : VS2shareholders(stepFive.pledges)}))
  }
  
  const changeHandler = (e) => {
    setStepFive(prevState => {
      const updated = prevState.pledges.map((item, index) => {
        if (index === parseInt(e.target.id)) {
          return {
            ...item,
            [e.target.name]: e.target.value
          };
        }
        return item;
      });
      return {
        ...prevState,
        pledges: updated
      };
    });
    console.log(stepFive);
  }
  return (
    <>
      <div className=" py-6 mt-4">
        <p className="text-lg font-extrabold">
          وثایق قابل‌ارائه        </p>
      </div>

      <div className=" ">
        <table className="w-full rounded-xl overflow-hidden">
          <thead>
            <tr className=" sticky top-0 text-sm border-b ">
              <th className="bg-white p-3 text-center ">رديف </th>
              <th className="bg-white p-3 text-center ">نوع وثیقه</th>
              <th className="bg-white p-3 text-center ">ارزش وثیقه/ مشخصات ضامن</th>
              <th className="bg-white p-3 text-center ">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {stepFive.pledges.length > 0 &&
              stepFive.pledges.map((item, index) => (
                <>
                  <tr className="bg-white  border-b">
                    <td className="p-4 text-xs text-gray-800 font-bold">
                      {index}
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className={err[index] && err[index].type && showErr[index] && showErr[index].type ? "border border-red-300 rounded-xl w-full" :"border border-gray-300 rounded-xl w-full"}
                        onChange={changeHandler}
                        value={stepFive.pledges[index].type}
                        name="type"
                        id={index}
                        onFocus={(e) => focusHandler(e , index)}
                      />
                    </td>
                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className={err[index] && err[index].cost && showErr[index] && showErr[index].cost ? "border border-red-300 rounded-xl w-full" :"border border-gray-300 rounded-xl w-full"}
                        onChange={changeHandler}
                        value={stepFive.pledges[index].cost}
                        name="cost"
                        id={index}
                        onFocus={(e) => focusHandler(e , index)}
                      />
                    </td>

                    <td className="p-4 text-xs text-gray-600 font-bold">
                      <input
                        type="text"
                        className={err[index] && err[index].description && showErr[index] && showErr[index].description ? "border border-red-300 rounded-xl w-full" :"border border-gray-300 rounded-xl w-full"}
                        onChange={changeHandler}
                        value={stepFive.pledges[index].description}
                        name="description"
                        id={index}
                        onFocus={(e) => focusHandler(e , index)}
                      />
                    </td>
                  </tr>

                </>
              ))}

            <tr className="">
              <td className="bg-white" colSpan="9">
                <button
                  className=" w-28 p-2 px-4 text-sm font-bold bg-green-200 rounded-xl m-2"
                  onClick={(e) => {
                    e.preventDefault()
                    setStepFive(prev => (
                      {
                        ...prev,
                        pledges: [
                          ...prev.pledges,
                          {
                            type: "",
                            cost: "",
                            description: ""
                          }
                        ]
                      }
                    ));
                  }}
                >
                  {" "}
                  افزودن ردیف{" "}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}
