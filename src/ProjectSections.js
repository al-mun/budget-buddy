import React from "react";
import Section from "./Section";

function ProjectSections(props) {
  const createSections = () => {
    const { sections,addNewExpense, toggleExpenseEditMode, updateExpenseDesc,
      updateExpenseAmount,removeExpenseSection, removeExpense } = props;

    return sections.map(section => {
      const addAllExpenses=()=>{
        let total = 0
        total = section.expenses.reduce((acc,curr)=>{
             acc+=curr.amount
            return acc
        }, 0)
        //have to get the section id, and section expenses
        if(Number.isNaN(total)){
          return "Waiting for entry"
        }
        return total.toFixed(2)
        //setTotalExpenses(total)
      }

      return (
        <div key={section.id}>
          <Section
            section={section}
            addAllExpenses={addAllExpenses}
            addNewExpense={addNewExpense}
            removeExpenseSection={removeExpenseSection}
            removeExpense={removeExpense}
            updateExpenseDesc={updateExpenseDesc}
            updateExpenseAmount={updateExpenseAmount}
            toggleExpenseEditMode={toggleExpenseEditMode}
          />
        </div>
      );
    });
    
  };

  return <div className="expenses">{createSections()}</div>;

}
export default ProjectSections;
