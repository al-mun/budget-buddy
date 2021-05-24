import React from "react"

const Fun = ({fun, total, modifyItem, deleteItem})=>{


    return(
        
                
        <div className="expense-items expense-categories">
        <div className="title">
            <h3>Fun</h3>
        </div>
        {fun.map(fun=>{
                return(
                    <div key={fun.id} className="item-details">
                        <p>{fun.title}</p>
                        <p>${fun.expense.toFixed(2)}</p>
                        <div>                                    
                            <button className="btn modify" onClick={modifyItem}>Modify</button>
                            <button className="btn" onClick={()=>deleteItem(fun.id)}>delete</button>       
                        </div>                     
                    </div>
                )
            })}
        <p>Total: {total().toFixed(2)}</p>
    </div>
    )
}

export default Fun