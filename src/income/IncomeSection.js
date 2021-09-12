import React, { useState } from "react";
import {AiFillEdit} from "react-icons/ai"
import {FaTrashAlt} from "react-icons/fa"
import {MdDone} from "react-icons/md"

const IncomeSection = ({
  incomeSection,
  removeIncome,addNewIncome,
  toggleIncomeEditMode,
  updateIncomeDesc,
  updateIncomeAmount
})=>{
  const [newIncomeName, setIncomeName] = useState("");
  const [newIncomeAmount, setIncomeAmount] = useState("");
  

  const addUpIncomes=()=>{
    let total = 0
    total = incomeSection.incomes.reduce((acc,curr)=>{
         acc+=curr.amount
        return acc
    }, 0)
    //setTotalIncome(total)
    if(Number.isNaN(total)){
      return "Waiting for entry"
    }
    return total.toFixed(2)
  }
  const handleSubmit = e => {
    e.preventDefault();

    addNewIncome(incomeSection.id, newIncomeName, newIncomeAmount);
    setIncomeName("");
    setIncomeAmount("");
  };  

  const handleUpdateIncomeDesc = (e, sectionId, incomeId) => {
    updateIncomeDesc(e.target.value, sectionId, incomeId);
  };
  const handleUpdateIncomeAmount = (e, sectionId, incomeId) => {
    updateIncomeAmount(e.target.value, sectionId, incomeId);
  };
  const handleIncomeToggle = (sectionId, incomeId) => {
    toggleIncomeEditMode(sectionId, incomeId);
  };
  const handleNewIncomeChange = e => {
    setIncomeName(e.target.value);
  };
  const handleNewAmountChange = e => {
    setIncomeAmount(e.target.value);
  };

  return (
    <div>
      <h4>{incomeSection.name}</h4>
      {incomeSection.incomes.map(income => {
        return !income.editting ? (
          <div className="income-item" key={income.id}>
            <p>{income.desc}</p>
            <p>{income.amount ? `$${income.amount.toFixed(2)}`: `$0.00`}</p>
            <div className="income-btns">
              <button title="Edit" onClick={() => handleIncomeToggle(incomeSection.id, income.id)}>
                <AiFillEdit/>
              </button>
              <button title="Delete" onClick={() => removeIncome(incomeSection.id,income.id)}>
                <FaTrashAlt/>
              </button>
            </div>

          </div>
        ) : (
          <form className="item">
            <input
              value={income.desc}
              onChange={e => handleUpdateIncomeDesc(e, incomeSection.id, income.id)}
            />
            <input
              type="number"
              value={income.amount}
              onChange={e => handleUpdateIncomeAmount(e, incomeSection.id, income.id)}
            />
            <button onClick={() => handleIncomeToggle(incomeSection.id, income.id)}>
            <MdDone/>
            </button>
          </form>
        );
      })}
      <div className="total">
        <p><b>Total: ${addUpIncomes()}</b></p>
      </div>
      {/* Add new income */}
      <form onSubmit={handleSubmit} className="submit-form">
        <input
          placeholder="Income Title"
          onChange={handleNewIncomeChange}
          value={newIncomeName}
        />
        <input
          placeholder="Income"
          type="number"
          onChange={handleNewAmountChange}
          value={newIncomeAmount}
        />
        <button className="add-button" type="submit" disabled={!newIncomeName.length}>
          Add Income
        </button>
      </form>

    </div>
  );
};

export default IncomeSection;
