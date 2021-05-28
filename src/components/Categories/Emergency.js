import React from "react"

const Emergency = ({emergency, total, modifyItem, deleteItem})=>{
    

    
    return(
        <div className="expense-items expense-categories">
        <div className="title">
            <h2>Emergency</h2>
        </div>
        {emergency.map(emergency=>{
                return(
                    <div key={emergency.id} className="item-details">
                        <p>{emergency.title}</p>
                        <p>${emergency.expense.toFixed(2)}</p>
                        <div>                                    
                            <button className="btn modify" onClick={()=>modifyItem(emergency.id)}>Modify</button>
                            <button className="btn" onClick={()=>deleteItem(emergency.id)}>delete</button>       
                        </div>
                    </div>
                )
            })}
        <p>Total: {total().toFixed(2)} </p>
    </div>
    )
}

export default Emergency