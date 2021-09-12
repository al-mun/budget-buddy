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
            <h5>Income ${addAllIncomes()}</h5>
            <h5>Expenses ${addAllExpenses()}</h5>
            <h5>Remaining ${remaining()}</h5>
          </div>
      </section>
    )
}
export default Summary;
