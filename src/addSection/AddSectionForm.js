import React, { useState } from "react";

const AddSectionForm=(props)=> {
  const [text, setText] = useState("")
  const handleChange = e => {
    setText(e.target.value);
  };
  const [error, setError] = useState("")

  
  const handleSubmit = e => {
      e.preventDefault();
      if(text.length > 0){
        props.addNewSection(text);
        setText("")
        setError("")
      }
      else{
        setError("Please enter a category name.")
      }
  };

  
  return (
    <form onSubmit={handleSubmit} className="add-section">
      <h2 className="categories-title">Categories</h2>
      <h5 className="bad">{error}</h5>
      <input
        onChange={handleChange}
        type="text"
        placeholder="i.e Groceries"
        value={text}
      />
      <button className="add-button" type="submit" value="Add Category">Add Category</button>
    </form>
  );
}

export default AddSectionForm;
