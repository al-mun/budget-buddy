import React from "react"

const Summary = (props)=>{

    return (
        <div className="summary-expenses">
        <div className="summary-bg">
        <h3>Summary</h3>
          <div className="summary">
            <h3 className="heading">Income: $<span className="good">{props.incomeArray}</span></h3>
            <h3 className="heading">Expenses: ${props.findTotal}</h3>
            <h3 className="heading">Left over: $
                <span 
                className={props.incomeArray-props.findTotal > 0 ?'good': 'bad'}>
                    {props.difference}
                </span>
            </h3>
          </div>
        </div>          
      </div>
    )
}

export default Summary