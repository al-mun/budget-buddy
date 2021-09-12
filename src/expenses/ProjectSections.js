import React from "react";
import Section from "./Section";

function ProjectSections(props) {
  const createSections = () => {
    const { sections,addNewExpense, toggleExpenseEditMode, updateExpenseDesc,
      updateExpenseAmount,removeExpenseSection, removeExpense } = props;

    return sections.map(section => {
      return (
          <div key={section.id}>
            <Section
                section={section}
                //addAllExpenses={addAllExpenses}
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
