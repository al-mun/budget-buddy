import React from "react"

const ExpenseForm = ({title, titleHandler, expense, categoryHandler, expenseHandler, submitExpense})=>{

    return(
        <div className="expense section">
        <form className="expense-form">
          <h3>Enter Expense</h3>
          <p>Expense Title</p>
          <input type="text" placeholder="Utility bill" className="input-boxes" value={title} onChange={titleHandler}/>
          <p>Amount</p>
          <input type="number" placeholder="50" className="input-boxes" value={expense} onChange={expenseHandler}/>
          <p>Category (not working yet)</p>
          <select className="input-boxes" onChange={categoryHandler}>
            <option value="0"></option>
            <option value="1">Bills</option>
            <option value="2">Grocery/Household</option>
            <option value="3">Fun</option>
            <option value="4">Emergency</option>
            <option value="5">Savings</option>
          </select>
          <button onClick={submitExpense} className="expense-button button" type="submit">Submit</button>
        </form>
      </div>
    )
}

export default ExpenseForm