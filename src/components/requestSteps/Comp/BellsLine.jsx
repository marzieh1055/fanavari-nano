import React from 'react'
import { TashilatContext } from '../../../contexts/Tashilat.Provider';
import { useContext } from 'react';

export default function AssetsLine({title , mapIndex}) {
    const {stepFour, setStepFour} = useContext(TashilatContext)
    const changeHandler = (e) => {
        setStepFour(prevState => {
            const updated = prevState.bills.map((item, index) => {
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
              bills: updated
            };
          });
          console.log(stepFour.bills);
    }
  return (
    <tr className="bg-white  border-b">
        <td className="p-2 text-xs text-gray-800 font-bold" colSpan={2}>
            {
              title === "NetSales" ? "فروش خالص و درآمد ارائه خدمات و ساير درآمدها" :
              title === "CostOfgoodssold" ? "بهاي تمام شده كالاي فروش رفته و خدمات" :
              title === "GrossProfit" ? "سود ناخالص " :
              title === "SellingAdministrativeAndGeneralExpenses" ? "هزينههاي فروش، اداري و عمومي " :
              title === "OtherOperatingExpenses" ? "ساير هزينههاي عملياتي" :
              title === "OperatingProfit" ? "سود عملياتي" :
              title === "financialCosts" ? "هزينههاي مالي" :
              title === "NonOperatingExpenses" ? "هزينههاي غيرعملياتي " :
              title === "NonOperatingIncome" ? "درآمدهاي غيرعملياتي" :
              title === "ProfitBeforeTax" ? "سود قبل از ماليات" :
              title === "incomeTax" ? "ماليات بر درآمد" :
              title === "NetProfit" ? "سود خالص" :
              title === "OtherAdjustments" ? "ساير تعديلات" : 
              title === "RetainedEarnings" ? "سود و زيان انباشته" : "" 
            }
        </td>
        <td className="p-2">
            <textarea
                className="w-full h-12 border border-gray-300 rounded-xl my -2"
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={stepFour.bills[mapIndex].last_balance_a}
                name="last_balance_a"
                id={mapIndex}
            ></textarea>
        </td>
        <td className="p-2">
            <textarea
                className="w-full h-12 border border-gray-300 rounded-xl my -2"
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={stepFour.bills[mapIndex].last_year_a}
                name="last_year_a"
                id={mapIndex}
            ></textarea>
        </td>
        <td className="p-2">
            <textarea
                className="w-full h-12 border border-gray-300 rounded-xl my -2"
                
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={stepFour.bills[mapIndex].two_years_a}
                name="two_years_a"
                id={mapIndex}
            ></textarea>
        </td>
        <td className="p-2">
            <textarea
                className="w-full h-12 border border-gray-300 rounded-xl my -2"
                
                cols="30"
                rows="10"
                onChange={changeHandler}
                value={stepFour.bills[mapIndex].three_years_a}
                name="three_years_a"
                id={mapIndex}
            ></textarea>
        </td>
    </tr>
  )
}
