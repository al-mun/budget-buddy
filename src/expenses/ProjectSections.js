import React from "react";
import Section from "./Section";
import {CSSTransition, TransitionGroup} from "react-transition-group"

function ProjectSections(props) {
  const createSections = () => {
    const { sections,addNewExpense, toggleExpenseEditMode, updateExpenseDesc,
      updateExpenseAmount, removeExpenseSection, removeExpense } = props;

    return (
      <TransitionGroup className="expenses">
      {sections.map(section => (
        <CSSTransition key={section.id} timeout={500} classNames="card-animation">
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
          </CSSTransition>
      )
    )}
    </TransitionGroup>
    )
  };

  return <div>{createSections()}</div>;

}
export default ProjectSections;
