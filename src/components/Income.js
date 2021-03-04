import React from "react"

const Income = ({income, incomeHandler, submitIncome})=>{

    return(
        <div className="income section">        
            <form className="income-form">
            <h3>Enter your income</h3>
            <input type="number" placeholder="1000" className="input-boxes" value={income} onChange={incomeHandler}/>
            <button onClick={submitIncome} className="button">Submit</button>
            </form>
        </div>
    )
}


export default Income

