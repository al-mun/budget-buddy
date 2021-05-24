import React from "react"

const Emergency = ({emergency, modifyItem, deleteItem})=>{
    
    const totalEmergency=()=>{
        let total = 0
        total = emergency.reduce((acc,curr)=>{
             acc +=curr.expense
            return acc
        }, 0)
        return total.toFixed(2)
      }
    
    
    return(
        <div className="expense-items expense-categories">
        <div className="title">
            <h3>Emergency</h3>
        </div>
        {emergency.map(emergency=>{
                return(
                    <div key={emergency.id} className="item-details">
                        <p>{emergency.title}</p>
                        <p>${emergency.expense.toFixed(2)}</p>
                        <div>                                    
                            <button className="btn modify" onClick={modifyItem}>Modify</button>
                            <button className="btn" onClick={()=>deleteItem(emergency.id)}>delete</button>       
                        </div>
                    </div>
                )
            })}
        <p>Total: {totalEmergency()} </p>
    </div>
    )
}

export default Emergency