import React from "react"

const Savings = ({savings, modifyItem, deleteItem})=>{
    
    const totalSavings=()=>{
        let total = 0
        total = savings.reduce(function(acc,curr){
             acc +=curr.expense
            return acc
        }, 0)
        return total.toFixed(2)
      }
    
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
        <p>Total: {totalSavings()}</p>
    </div>
    )
}

export default Savings