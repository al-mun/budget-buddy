import './App.css';
import React, { useState } from 'react';

const App =()=>{

  const [income, setIncome] = useState(0)
  const [incomeArray, setIncomeArray] = useState([])
  const [title, setTitle] = useState("")
  const [expense, setExpense] = useState(0)
  const [expenseArray, setExpenseArray] = useState([])  
  const [newArray, setNewArray] = useState([])  //where the expense array is stored
  const [total, setTotal] = useState(0)

  const incomeHandler=(e)=>{
    setIncome(e.target.value)
  }
  const submitIncome=(e)=>{
    e.preventDefault()
    setIncome("")
    setIncomeArray(parseFloat(income, 10))
  }
  const titleHandler=(e)=>{
    setTitle(e.target.value)
  }
  const expenseHandler=(e)=>{
    setExpense(e.target.value)
  }
  const submitExpense=(e)=>{
    e.preventDefault()
    setTitle("")
    setExpense(0)
    let expenseFloat = parseFloat(expense, 10)
    setNewArray([...newArray, {id: Math.random()*10000, title: title, expense: expenseFloat}])
    sum()
  }

  const sum = ()=>{
    let total = 0;
    if(newArray.length > 0){
    total = newArray.reduce(function(acc,curr){
         acc +=curr.expense;
        return acc;
    }, 0);
    }
    //Show the total on the output
  return total;
  }

  console.log(newArray)
  console.log(total)
  
    return (
      <div className="App">

        <form>
          <h1>Budget App React</h1>
          <h3>Enter your income</h3>
          <input type="number" value={income} onChange={incomeHandler}/>
          <button onClick={submitIncome}>Submit</button>
        </form>

        <form>
          <h3>Enter expense</h3>
          <label htmlFor="input">Title </label>
          <input type="text" value={title} onChange={titleHandler}/><br/><br/>

          <label htmlFor="input">Amount </label>
          <input type="number" value={expense} onChange={expenseHandler}/><br/><br/>
          <button onClick={submitExpense} type="submit">Submit</button>
        </form>

        <div className="summary">
          <p>Income:<strong>${incomeArray}</strong></p>
          <p>Expense: <strong>${expenseArray}</strong></p>
          <p>Difference: <strong>${}</strong></p>
        </div>

        <h4>Expenses</h4>
        <ul className="expense-list">
          {newArray.map(expense=>{
            return (
              <li key={expense.id}>{expense.title} <strong>${expense.expense}</strong></li>
            )
          })}
          </ul>
      </div>
    )
}

export default App;
