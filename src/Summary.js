import React from "react";

const Summary = ({sections})=>{

  // const addUpExpenses =()=>{
  //   let total = 0
  //   total = section.expenses.reduce((acc,curr)=>{
  //     acc+=curr.amount
  //     return acc
  //   }, 0)
  //   return total.toFixed(2)
  //   //setExpensesTotal(total)
  // }

  

    return(
      <section className="summary">
          <h4>Summary</h4>
          <div className="totals">
            <h5>Income: </h5>
            <h5>Expenses:</h5>
            <h5>Remaining: $0.00</h5>
          </div>
      </section>
    )
}
export default Summary;
