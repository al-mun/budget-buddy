import React from "react"

const Bills = ({bills, modifyItem, deleteItem })=>{

    const totalBills=()=>{
        let total = 0
        total = bills.reduce((acc,curr)=>{
             acc +=curr.expense
            return acc
        }, 0)
        return total.toFixed(2)
      }
    return(
        <div className="expense-items expense-categories">
            <div className="title">
                <h3>Bills</h3>
            </div>
            {bills.map(bill=>{
                    return( // do I clean this up? how can I map over the whole list while categorizing
                        <div key={bill.id} className="item-details">
                            <p>{bill.title}</p>
                            <p>${bill.expense.toFixed(2)}</p> 
                            <div>                                    
                                <button className="btn modify" onClick={modifyItem}>Modify</button>
                                <button className="btn" onClick={()=>deleteItem(bill.id)}>delete</button> 
                            </div>
                        </div>
                    )
                })}
            <p>Total: {totalBills()}</p>

        </div>
    )
}

export default Bills