import React, { useState } from "react"

const ExpenseList = ({bills, grocery,fun,emergency,
    savings, totalBills, totalGrocery, totalFun, totalEmergency, totalSavings})=>{
        //totalbills,totalGrocery,totalFun,totalEmergency,totalSavings
    //need a function or operator to have each bill entered added to its respective category (depending on user selection)


  
    return(
        <div className="expenses-section">
            <h1>Expenses</h1>
            <div className="expense-categories">
                <div className="expense-items expense-categories">
                    <div className="title">
                        <h3>Bills</h3>
                    </div>
                    {bills.map(bill=>{
                            return(
                                <div key={bill.id} className="item-details">
                                    <p>{bill.title}</p>
                                    <p>${bill.expense}</p>        
                                </div>
                            )
                        })}
                    <p>Total: {totalBills}</p>
                </div>
                
                <div className="expense-items expense-categories">
                    <div className="title">
                        <h3>Grocery</h3>
                    </div>
                    {grocery.map(grocery=>{
                            return(
                                <div key={grocery.id} className="item-details">
                                    <p>{grocery.title}</p>
                                    <p>${grocery.expense}</p>
                                </div>
                            )
                        })}
                    <p>Total: {totalGrocery}</p>
                </div>
                
                <div className="expense-items expense-categories">
                    <div className="title">
                        <h3>Fun</h3>
                    </div>
                    {fun.map(fun=>{
                            return(
                                <div key={fun.id} className="item-details">
                                    <p>{fun.title}</p>
                                    <p>${fun.expense}</p>                          
                                </div>
                            )
                        })}
                    <p>Total: {totalFun}</p>
                </div>
 
                
                <div className="expense-items expense-categories">
                    <div className="title">
                        <h3>Emergency</h3>
                    </div>
                    {emergency.map(emergency=>{
                            return(
                                <div key={emergency.id} className="item-details">
                                    <p>{emergency.title}</p>
                                    <p>${emergency.expense}</p>
                                </div>
                            )
                        })}
                    <p>Total: {totalEmergency} </p>
                </div>
                
                <div className="expense-items expense-categories">
                    <div className="title">
                        <h3>Savings</h3>
                    </div>
                    {savings.map(savings=>{
                            return(
                                <div key={savings.id} className="item-details">
                                    <p>{savings.title}</p>
                                    <p>${savings.expense}</p>
                                </div>
                            )
                        })}
                    <p>Total: {totalSavings}</p>
                </div>
            </div>
        </div>)
}

export default ExpenseList