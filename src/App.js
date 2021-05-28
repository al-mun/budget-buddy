import './App.css';
import Income from "./components/Income"
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import Summary from "./components/Summary"
import ExpenseList from './components/ExpenseList';

const App =()=>{
  //useState initializations
  //income section of app
  const [incomeText, setIncomeText] = useState("")
  const [income, setIncome] = useState(0)
  //enter an expense section
  const [title, setTitle] = useState("")
  const [expense, setExpense] = useState([])
  const [category, setCategory] = useState(0)
  //categories arrays
  const [billsArray, setBillsArray] = useState([])
  const [groceryArray, setGroceryArray] = useState([])
  const [funArray, setFunArray] = useState([])
  const [emergencyArray, setEmergencyArray] = useState([])
  const [savingsArray, setSavingsArray] = useState([])

  const [modifyStateB, setModifyStateB] = useState([])
  const [modifyStateG, setModifyStateG] = useState([])
  const [modifyStateF, setModifyStateF] = useState([])
  const [modifyStateE, setModifyStateE] = useState([])
  const [modifyStateS, setModifyStateS] = useState([])

  const [modifyOverlay, setModifyOverlay] = useState(false)
  const [modifyButton, setModifyButton] = useState("Modify")



  //functions
  //set the income entered by the user as income
  const incomeHandler=(e)=>{
    setIncomeText(e.target.value)
  }
  const submitIncome=(e)=>{
    e.preventDefault()
    //input validation
    if(incomeText.length <=0){
      alert("cannot be blank")
    }
    else{
      setIncomeText("")
      setIncome(parseFloat(incomeText, 10))  //parse income 
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
    let randomId = Math.floor(Math.random() * 1001)
    let cat = parseInt(category, 10)
    let amount = parseFloat(expense)
    if(cat === 1){
      setBillsArray([...billsArray, {id: randomId, title: title, expense: amount, category: cat}])
    }
    else if(cat===2){
      setGroceryArray([...groceryArray, {id: randomId, title: title, expense: amount, category: cat}])
    }
    else if(cat===3){
      setFunArray([...funArray, {id: randomId, title: title, expense: amount, category: cat}])
    }
    else if(cat ===4){
      setEmergencyArray([...emergencyArray, {id: randomId, title: title, expense: amount, category: cat}])
    }
    else if(cat ===5){
      setSavingsArray([...savingsArray, {id: randomId, title: title, expense: amount, category: cat}])
    }
  }
  const submitExpense=(e)=>{
    e.preventDefault()  //stop refresh
    //input validation - if blank, alert.
    if(title.length <=0 || expense.length <=0 || category===0){
      alert("cannot be blank")
    }
    else{
      setTitle("")        //reset textboxes
      setExpense("") 
      categorizer(category) //function to categorize based on selection
    }
  }

  const totalBills=()=>{
    let total = 0
    total = billsArray.reduce((acc,curr)=>{
         acc +=curr.expense
        return acc
    }, 0)
    return total
  }
  const totalGrocery=()=>{
    let total = 0
    total = groceryArray.reduce((acc,curr)=>{
         acc +=curr.expense
        return acc
    }, 0)
    return total
  }
  const totalFun = ()=>{
    let total = 0
    total = funArray.reduce((acc,curr)=>{
         acc +=curr.expense
        return acc
    }, 0)
    return total
  }
  const totalEmergency=()=>{
    let total = 0
    total = emergencyArray.reduce((acc,curr)=>{
         acc +=curr.expense
        return acc
    }, 0)
    return total
  }

  const totalSavings=()=>{
    let total = 0
    total = savingsArray.reduce((acc,curr)=>{
         acc +=curr.expense
        return acc
    }, 0)
    return total
  }
  const submitModify = (id)=>{
    
    console.log("hello")
  }

  const modifyItem =(id)=>{

    //change overlay to modify
    setModifyOverlay(!modifyOverlay)
    //fill in the form with previous information
  }

  const deleteItem = (id)=>{
    //create new array and filter it by item id that's not = to the one selected

    const newBills = billsArray.filter((item)=> item.id !== id)
    setBillsArray(newBills)

    const newGrocery = groceryArray.filter((item)=> item.id !== id)
    setGroceryArray(newGrocery)

    const newFun = funArray.filter((item)=> item.id !== id)
    setFunArray(newFun)

    const newEmerg = emergencyArray.filter((item)=> item.id !== id)
    setEmergencyArray(newEmerg)
    
    const newSavings = savingsArray.filter((item)=> item.id !== id)
    setSavingsArray(newSavings)
  }

    return (
      <div className="App">
        <div className="title">
          <h1>Budget App React</h1>
        </div>
        <div className="forms-bg">

          <Income 
            income={incomeText}
            incomeHandler={incomeHandler}
            submitIncome={submitIncome}/>
          <ExpenseForm 
            title={title}
            titleHandler={titleHandler}
            expense={expense}
            categoryHandler={categoryHandler}
            expenseHandler={expenseHandler}
            submitExpense={submitExpense}
          />
        </div>
        <Summary
          income={income}
          bills={billsArray}
          grocery={groceryArray}
          fun={funArray}
          emergency={emergencyArray}
          savings={savingsArray}

          totalBills={totalBills}
          totalGrocery={totalGrocery}
          totalFun={totalFun}
          totalEmerg={totalEmergency}
          totalSavings={totalSavings}
          />
        <ExpenseList
          modifyOverlay={modifyOverlay}
          bills={billsArray}
          category={category}
          grocery={groceryArray}
          fun={funArray}
          emergency={emergencyArray}
          savings={savingsArray}
          modifyItem={modifyItem}
          deleteItem={deleteItem}
          title={titleHandler}
          submitModify={submitModify}
          titleHandler={titleHandler}
          expenseHandler={expenseHandler}

          totalBills={totalBills}
          totalGrocery={totalGrocery}
          totalFun={totalFun}
          totalEmerg={totalEmergency}
          totalSavings={totalSavings}
          />
    </div>
    )
}

export default App;
