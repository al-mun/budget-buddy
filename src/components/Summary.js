import React from "react"

const Summary = ({incomeArray, totalBills, totalGrocery, totalFun, totalEmerg, totalSavings})=>{


  //add up all of the arrays
  const totalExpenses = ()=>{
    let total = 0
    const bills = parseFloat(totalBills())
    const grocery = parseFloat(totalGrocery())
    const fun = parseFloat(totalFun())
    const emerg = parseFloat(totalEmerg())
    const savings = parseFloat(totalSavings())
    total = bills+grocery+fun+emerg+savings
    return total.toFixed(2)
}

const leftOver = incomeArray - totalExpenses()

    return (
        <div className="summary-expenses">
        <div className="summary-bg">
        <h3>Summary</h3>
          <div className="summary">
            <h3 className="heading">Income: $<span className="good">{incomeArray}</span></h3>
            <h3 className="heading">
              Expenses:{totalExpenses()}
            </h3>
            <h3 className="heading">Left over: $
                <span className={leftOver > 0 ?'good': 'bad'}>
                    {leftOver.toFixed(2)}
                </span>
            </h3>
          </div>
        </div>          
      </div>
    )
}

export default Summary