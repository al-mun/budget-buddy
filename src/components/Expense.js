import React, {useState} from "react"

const Expense = () =>{

    const [expenseItem, setExpenseItem] = useState([])

    const addExpense = ()=>{
        setExpenseItem([... expenseItem, {
            id: expenseItem.length,
            test: "hello"
        }])
    }
    return(
        <div className="expense">
            <button onClick={addExpense}>Add Expense</button>
            <ul>
                {expenseItem.map(expense=> (
                <li key={expense.id}>{expense.test}</li>))}
            </ul>
        </div>
)}
export default Expense