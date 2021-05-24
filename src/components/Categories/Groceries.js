import React from "react"

const Groceries = ({grocery, modifyItem, deleteItem})=>{

    const totalGrocery=()=>{
        let total = 0
        total = grocery.reduce((acc,curr)=>{
             acc +=curr.expense
            return acc
        }, 0)
        return total.toFixed(2)
      }
    return(
        <div className="expense-items expense-categories">
            <div className="title">
                <h3>Grocery</h3>
            </div>
            {grocery.map(grocery=>{
                    return(
                        <div key={grocery.id} className="item-details">
                            <p>{grocery.title}</p>
                            <p>${grocery.expense.toFixed(2)}</p>
                            <div>                                    
                                <button className="btn modify" onClick={modifyItem}>Modify</button>
                                <button className="btn" onClick={()=>deleteItem(grocery.id)}>delete</button>       
                            </div>
                        </div>
                    )
                })}
            <p>Total: {totalGrocery()}</p>
        </div>
    )
}

export default Groceries