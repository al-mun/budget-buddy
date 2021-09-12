import React, { useState } from "react";

const AddSectionForm=(props)=> {
  const [text, setText] = useState("")
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.addNewSection(text);
    setText("")
  };

  return (
    <form onSubmit={handleSubmit} className="add-section">
      <input
        onChange={handleChange}
        type="text"
        placeholder="i.e Groceries"
        value={text}
      />
      <button className="add-button" disabled={!text.length} type="submit" value="Add Category">Add Category</button>
    </form>
  );
}

export default AddSectionForm;
