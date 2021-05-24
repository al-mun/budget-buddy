import React from "react"

const Savings = ({savings, total, modifyItem, deleteItem})=>{
    

    
    return(
        <div className="expense-items expense-categories">
        <div className="title">
            <h3>Savings</h3>
        </div>
        {savings.map(savings=>{
                return(
                    <div key={savings.id} className="item-details">
                        <p>{savings.title}</p>
                        <p>${savings.expense.toFixed(2)}</p>
                        <div>                                    
                            <button className="btn modify" onClick={modifyItem}>Modify</button>
                            <button className="btn" onClick={()=>deleteItem(savings.id)}>delete</button>       
                        </div>
                    </div>
                )
            })}
        <p>Total: {total().toFixed(2)}</p>
    </div>
    )
}

export default Savings