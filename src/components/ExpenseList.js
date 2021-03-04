import React, { useState } from "react"

const ExpenseList = ({title, expenseFloat, categoryInt, expenseArray, category})=>{

    //need a function or operator to have each bill entered added to its respective category (depending on user selection)


    return(
        <div className="expenses-section">
            <h3>Expenses</h3>

            {expenseArray.map(expense=>{
                    return (
                        <div key={expense.id} className="tool-tip">
                            <p className="heading">{expense.title} ${expense.expense.toFixed(2)}</p>
                            <span className="tool-tip-info">&#123; id: {expense.id} title: {expense.title} amount: {expense.expense} category: {expense.category}&#125;</span>
                        </div>
                    )
                })}
                
            <div className="expense-categories">
                <h3>Bills</h3>
                <h3>Grocery</h3>
                <h3>Fun</h3>
                <h3>Emergency</h3>
                <h3>Savings</h3>


            </div>
        </div>)
}

export default ExpenseList