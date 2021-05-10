import './App.css';
import Income from "./components/Income"
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Summary from "./components/Summary"
import ExpenseList from './components/ExpenseList';

const App =()=>{
  //useState initializations

  //income section of app
  const [income, setIncome] = useState([])
  const [incomeArray, setIncomeArray] = useState([])

  //enter an expense section
  const [title, setTitle] = useState("")
  const [expense, setExpense] = useState([])
  const [category, setCategory] = useState(0)
  const [expenseArray, setexpenseArray] = useState([])  //where the expense array is stored

  //categories arrays
  const [billsArray, setBillsArray] = useState([])
  const [groceryArray, setGroceryArray] = useState([])
  const [funArray, setFunArray] = useState([])
  const [emergencyArray, setEmergencyArray] = useState([])
  const [savingsArray, setSavingsArray] = useState([])

  const [total, setTotal] = useState([])

  //functions
  //set the income entered by the user as income
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
      setIncomeArray(parseFloat(income, 10))  //parse income 
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

  const categorizer=()=>{
    
    let cat = parseInt(category, 10)
    let amount = parseFloat(expense)
    if(cat === 1){
      setBillsArray([...billsArray, {id: Math.floor(Math.random() * 1001), title: title, expense: amount, category: cat}])
    }
    else if(cat===2){
      setGroceryArray([...groceryArray, {id: Math.floor(Math.random() * 1001), title: title, expense: amount, category: cat}])
    }
    else if(cat===3){
      setFunArray([...funArray, {id: Math.floor(Math.random() * 1001), title: title, expense: amount, category: cat}])
    }
    else if(cat ===4){
      setEmergencyArray([...emergencyArray, {id: Math.floor(Math.random() * 1001), title: title, expense: amount, category: cat}])
    }
    else if(cat ===5){
      setSavingsArray([...savingsArray, {id: Math.floor(Math.random() * 1001), title: title, expense: amount, category: cat}])
    }
  }
  const submitExpense=(e)=>{
    e.preventDefault()  //stop refresh
    //input validation
    if(title.length <=0 || expense.length <=0 || category===0){
      alert("cannot be blank")
    }
    else{
      setTitle("")        //reset textboxes
      setExpense("") 
      let expenseFloat = parseFloat(expense, 10)  //turn string into float
      let categoryInt = parseInt(category, 10)
      setexpenseArray([...expenseArray, {id: Math.floor(Math.random() * 1001), title: title, expense: expenseFloat, category: categoryInt}])  //new array
      findTotal()  //find the total
    
      setTotal([])
      totalBills()
      totalGrocery()
      totalFun()
      totalEmergency()
      totalSavings()
      categorizer(category)

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
  const totalBills=()=>{
    let total = 0
    //console.log(expenseArray.length)
    total = billsArray.reduce(function(acc,curr){
         acc +=curr.expense
        return acc
    }, 0)
    return total.toFixed(2)
  }
  const totalGrocery=()=>{
    let total = 0
    //console.log(expenseArray.length)
    total = groceryArray.reduce(function(acc,curr){
         acc +=curr.expense
        return acc
    }, 0)
    return total.toFixed(2)
  }
  const totalFun = ()=>{
    let total = 0
    //console.log(expenseArray.length)
    total = funArray.reduce(function(acc,curr){
         acc +=curr.expense
        return acc
    }, 0)
    return total.toFixed(2)
  }
  const totalEmergency=()=>{
    let total = 0
    //console.log(expenseArray.length)
    total = emergencyArray.reduce(function(acc,curr){
         acc +=curr.expense
        return acc
    }, 0)
    return total.toFixed(2)
  }
  const totalSavings=()=>{
    let total = 0
    //console.log(expenseArray.length)
    total = savingsArray.reduce(function(acc,curr){
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
          totalBills={totalBills()}
          totalGrocery={totalGrocery()}
          totalFun={totalFun()}
          totalEmergency={totalEmergency()}
          totalSavings={totalSavings()}

          bills={billsArray}
          grocery={groceryArray}
          fun={funArray}
          emergency={emergencyArray}
          savings={savingsArray}
          expense={expense}
          expenseArray={expenseArray}
          category={category}/>
    </div>
    )
}

export default App;
