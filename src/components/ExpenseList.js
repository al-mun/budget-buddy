import React from "react"

import Bills from "./Categories/Bills"
import Groceries from "./Categories/Groceries"
import Fun from "./Categories/Fun"
import Emergency from "./Categories/Emergency"
import Savings from "./Categories/Savings"

const ExpenseList = ({bills, grocery,fun,emergency,
    savings,modifyItem, deleteItem})=>{
  
    return(
        <div className="expenses-section">
            <h1>Expenses</h1>
            <div className="expense-categories">

                <Bills
                    bills={bills}
                    modifyItem={modifyItem}
                    deleteItem={deleteItem}/>
                <Groceries
                    grocery={grocery}
                    modifyItem={modifyItem}
                    deleteItem={deleteItem}/>
                <Fun
                    fun={fun}
                    modifyItem={modifyItem}
                    deleteItem={deleteItem}/>
                <Emergency
                    emergency={emergency}
                    modifyItem={modifyItem}
                    deleteItem={deleteItem}/>
                <Savings
                    savings={savings}
                    modifyItem={modifyItem}
                    deleteItem={deleteItem}/>
            </div>
        </div>)
}

export default ExpenseList