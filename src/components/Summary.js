import React from "react"

const Summary = ({totalExpenses, incomeArray})=>{

  const leftOver = incomeArray - totalExpenses

    return (
        <div className="summary-expenses">
        <div className="summary-bg">
        <h3>Summary</h3>
          <div className="summary">
            <h3 className="heading">Income: $<span className="good">{incomeArray}</span></h3>
            <h3 className="heading">Expenses: ${totalExpenses}</h3>
            <h3 className="heading">Left over: $
                <span 
                className={incomeArray-totalExpenses > 0 ?'good': 'bad'}>
                    {leftOver.toFixed(2)}
                </span>
            </h3>
          </div>
        </div>          
      </div>
    )
}

export default Summary