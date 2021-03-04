import './App.css';
import Income from "./components/Income"
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Summary from "./components/Summary"
import ExpenseList from './components/ExpenseList';

const App =()=>{
  //useState initializations
  const [income, setIncome] = useState([])
  const [incomeArray, setIncomeArray] = useState([])
  const [title, setTitle] = useState("")
  const [expense, setExpense] = useState([])
  const [category, setCategory] = useState(0)
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
  const categoryHandler=(e)=>{
    setCategory(e.target.value)
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
      setCategory(0)   
      let expenseFloat = parseFloat(expense, 10)  //turn string into float
      let categoryInt = parseInt(category, 10)
      setexpenseArray([...expenseArray, {id: Math.floor(Math.random() * 1001), title: title, expense: expenseFloat, category: categoryInt}])  //new array
      findTotal()  //find the total
    }
  }
  const findTotal = ()=>{
    let total = 0
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
          <Income 
            income={income}
            incomeHandler={incomeHandler}
            submitIncome={submitIncome}/>
          <ExpenseForm 
            title={title}
            titleHandler={titleHandler}
            expense={expense}
            categoryHandler={categoryHandler}
            expenseHandler={expenseHandler}
            submitExpense={submitExpense}/>
        </div>
        <Summary 
          expenseArray={expenseArray}
          incomeArray={incomeArray}
          findTotal={findTotal()}
          difference={difference()}
          />
        <ExpenseList 
          expense={expense}
          title={title}
          expenseArray={expenseArray}
          category={category}/>
    </div>
    )
}

export default App;
