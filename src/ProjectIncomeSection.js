import React from "react";
import IncomeSection from "./IncomeSection";

const ProjectIncomeSection=({ incomeSection,removeIncome,addNewIncome,toggleIncomeEditMode, updateIncomeDesc,
  updateIncomeAmount})=> {
  
    return incomeSection.map(incomeSection => {
      return (
        <div key={incomeSection.id} className="section">
          <IncomeSection
            incomeSection={incomeSection}
            addNewIncome={addNewIncome}
            removeIncome={removeIncome}
            updateIncomeDesc={updateIncomeDesc}
            updateIncomeAmount={updateIncomeAmount}
            toggleIncomeEditMode={toggleIncomeEditMode}
          />
        </div>
      );
    });
  

}
export default ProjectIncomeSection;
