import React from "react";

const Summary = ({sections, incomeSection})=>{

  const addAllExpenses =()=>{
    let allSectionsCopy = JSON.parse(JSON.stringify(sections))
    //map out the expenese
    let newSections = allSectionsCopy.map(expense=> expense.expenses.map(expense=>expense.amount))
    //merged the expenses from their categories into 1 array
    const merged = [].concat.apply([], newSections)
    let total = 0
    //use reduce to find the sum
    total = merged.reduce((acc,curr)=>{
      acc+=curr
      return acc
    }, 0)
    return total.toFixed(2)
  }
  
  const addAllIncomes = ()=>{
    let allSectionsCopy = JSON.parse(JSON.stringify(incomeSection))
    let newIncome = allSectionsCopy.map(income=> income.incomes.map(income=>income.amount))
    const merged = [].concat.apply([], newIncome)
    let total = 0
    //use reduce to find the sum
    total = merged.reduce((acc,curr)=>{
      acc+=curr
      return acc
    }, 0)
    return total.toFixed(2)
  }

  const remaining = ()=>{
    let remaining = 0
    remaining = addAllIncomes() - addAllExpenses()
    return remaining.toFixed(2)
  }
  

    return(
      <section className="summary">
          <h4>Summary</h4>
          <div className="totals">
            <div className="totals-rows">
              <h5>Income</h5>
              <h5>${addAllIncomes()}</h5>
            </div>
            <div className="totals-rows">
              <h5>Expenses</h5>
              <h5>${addAllExpenses()}</h5>
            </div>
            <div className="totals-rows">
              <h5>Remaining</h5>
              <h5 className={remaining()<0 ? "bad":"good"}>${remaining()}</h5>
            </div>
          </div>
      </section>
    )
}
export default Summary;
