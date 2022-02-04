import React, { useState } from "react";
import {AiFillEdit} from "react-icons/ai"
import {FaTrashAlt} from "react-icons/fa"
import {MdDone} from "react-icons/md"
import {GrClose} from "react-icons/gr"
import { TransitionGroup, CSSTransition } from "react-transition-group";


const Section = ({
  section,
  addNewExpense,
  toggleExpenseEditMode,
  removeExpense,
  updateExpenseDesc,
  updateExpenseAmount,
  removeExpenseSection,
  addAllExpenses
  //totalExpenses
}) => {
  const [newExpenseName, setExpenseName] = useState("");
  const [newExpenseAmount, setExpenseAmount] = useState("")

  const addUpExpenses=()=>{
    let total = 0
    total = section.expenses.reduce((acc,curr)=>{
         acc+=curr.amount
        return acc
    }, 0)
    //have to get the section id, and section expenses
    if(Number.isNaN(total)){
      return 0
    }
    else{
      return total.toFixed(2)
    }
    //setTotalExpenses(total)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewExpense(section.id, newExpenseName, newExpenseAmount);
    setExpenseName("");
    setExpenseAmount("")
    //addUpExpenses(sectionId)
  };
  const handleUpdateExpenseDesc = (e, sectionId, expenseId) => {
    updateExpenseDesc(e.target.value, sectionId, expenseId);
  };
  const handleUpdateExpenseAmount = (e, sectionId, expenseId)=>{
    if(e.target.value=== ""){
      updateExpenseAmount(0, sectionId, expenseId)
    }
    updateExpenseAmount(e.target.value, sectionId, expenseId)
    //addUpExpenses(sectionId)
  }
  const handleToggle = (sectionId, expenseId) => {
    toggleExpenseEditMode(sectionId, expenseId);
  };

  const handleNewExpenseChange = e => {
    setExpenseName(e.target.value);
  };
  const handleNewAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  return (
    <div className="section">
      <span title="Close Category" onClick={()=>removeExpenseSection(section.id)} className="close-section"><GrClose/></span>
      <div className="section-title">
        <h4>{section.sectionName}</h4>
        <button className=""><AiFillEdit/></button>
        
      </div>
      <TransitionGroup>
      {section.expenses.map(expense => (
        <CSSTransition key={expense.id} timeout={500} classNames="card-animation">
        {!expense.editting ? (
          <div className="expense-section" key={expense.id}>
            <div className="item" key={expense.id}>
            <p>{expense.desc}</p>
            <p>{expense.amount ? `$${expense.amount.toFixed(2)}`: "$0.00"}</p>
            <button title="Edit" onClick={() => handleToggle(section.id, expense.id)}>
              <AiFillEdit/>
            </button>
            <button title="Delete" onClick={() => removeExpense(section.id,expense.id)}>
              <FaTrashAlt/>
            </button>
          </div>
          </div>
        ) : (
          <section className="item">
            <input
              value={expense.desc}
              onChange={e => handleUpdateExpenseDesc(e, section.id, expense.id)}
            />
            <input
              type="number"
              value={expense.amount}
              onChange={e => handleUpdateExpenseAmount(e, section.id, expense.id)}
            />
            <button onClick={() => handleToggle(section.id, expense.id)}>
              <MdDone/>
            </button>
          </section>
            )
          }
          </CSSTransition>
        ))
      }
      </TransitionGroup>
      <div className="total">
        <p><b>Total: $ {addUpExpenses()}</b></p>
      </div>

      {/* Add new expense */}
      <form onSubmit={handleSubmit} className="submit-form">
        <input
          placeholder="Expense Title"
          onChange={handleNewExpenseChange}
          value={newExpenseName}
        />
        <input
          placeholder="Amount"
          type="number"
          onChange={handleNewAmountChange}
          value={newExpenseAmount}
        />
        <button className="add-button" type="submit" disabled={!newExpenseName.length}>
          Add Expense
        </button>
        <p>
          
        </p>
      </form>
      
    </div>
    
    
  );
  
};

export default Section;
