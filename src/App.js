import './App.css';
import React, { useState } from 'react';

const App =()=>{
  //useState initializations
  const [income, setIncome] = useState([])
  const [incomeArray, setIncomeArray] = useState([])
  const [title, setTitle] = useState("")
  const [expense, setExpense] = useState([])
  const [expenseArray, setexpenseArray] = useState([])  //where the expense array is stored

  //functions
  const incomeHandler=(e)=>{
    setIncome(e.target.value)
  }
  const submitIncome=(e)=>{
    e.preventDefault()
    //input validation
    if(income.length <=0){
      alert("cannot be blank")
    }
    else{
      setIncome("")
      setIncomeArray(parseFloat(income, 10))
    }
  }
  const titleHandler=(e)=>{
    setTitle(e.target.value)
  }
  const expenseHandler=(e)=>{
    setExpense(e.target.value)
  }
  const submitExpense=(e)=>{
    e.preventDefault()  //stop refresh
    //input validation
    if(title.length <=0 || expense.length <=0){
      alert("cannot be blank")
    }
    else{
      setTitle("")        //reset textboxes
      setExpense("")   
      let expenseFloat = parseFloat(expense, 10)  //turn string into float
      setexpenseArray([...expenseArray, {id: Math.floor(Math.random() * 1001), title: title, expense: expenseFloat}])  //new array
      findTotal()  //find the total
    }
  }
const findTotal = ()=>{
  let total = 0
  //console.log(expenseArray)
  //console.log(expenseArray.length)
  total = expenseArray.reduce(function(acc,curr){
       acc +=curr.expense
      return acc
  }, 0)
return total.toFixed(2) 
}
const difference = ()=>{
  const difference = incomeArray-findTotal()
  return difference.toFixed(2)
}
    return (
      <div className="App">
        <div className="title">
          <h1>Budget App React</h1>
        </div>
        <div className="forms-bg">
        <div>
          <h5>This React App allows the user to enter their income, expenses and then see their summary below.</h5>
          <h5>When the user enters an expense title and amount it's added to an array called expenseArray and given an ID.</h5>
          <h5>With every entry, the array's
            state is updated using React Hooks. Hover over the expense to see the array. The total of the expenses is then calculated using a reduce function.</h5>
          <h5>Lastly, the expense total is subracted
          from the income entered and the difference is show in "Left Over". This amount will be given a
          class that makes it red or green depending on if it's positive or negative using the ternary operator.
          </h5>
          <a href="https://github.com/alejandro-mun/budget-app-react" target="_blank">Link to code in github</a>
        </div>
          <div className="income section">        
            <form className="income-form">
              <h3>Enter your income</h3>
              <input type="number" placeholder="1000" className="input-boxes" value={income} onChange={incomeHandler}/>
              <button onClick={submitIncome} className="button">Submit</button>
            </form>
          </div>
          <div className="expense section">
            <form className="expense-form">
              <h3>Enter Expense</h3>
              <p>Expense Title</p>
              <input type="text" placeholder="Utility bill" className="input-boxes" value={title} onChange={titleHandler}/>
              <p>Amount </p>
              <input type="number" placeholder="50" className="input-boxes" value={expense} onChange={expenseHandler}/>
              <p>Category (not working yet)</p>
              <select className="input-boxes">
                <option></option>
                <option>Bills</option>
                <option>Grocery/Household</option>
                <option>Fun</option>
                <option>Emergency</option>
                <option>Savings</option>
              </select>
              <button onClick={submitExpense} className="expense-button button" type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="summary-expenses">
          <div className="summary-bg">
          <h3>Summary</h3>
            <div className="summary">
              <h3 className="heading">Income: ${incomeArray}</h3>
              <h3 className="heading">Expenses: ${findTotal()}</h3>
              <h3 className="heading">Left over: <span className={incomeArray-findTotal()> 0 ?'good': 'bad'}>${difference()}</span></h3>
            </div>
          </div>          
        </div>

        <div className="expenses-section">
            <div className="expense-categories">
            <h3>Expenses</h3>
              {expenseArray.map(expense=>{
                return (
                  <div key={expense.id} className="tool-tip">
                    <p className="heading">{expense.title} ${expense.expense.toFixed(2)}</p>
                    <span className="tool-tip-info">&#123; id: {expense.id} title: {expense.title} amount: {expense.expense} &#125;</span>
                  </div>
                )
              })}
            </div>
          </div>
    </div>
    )
}

export default App;
