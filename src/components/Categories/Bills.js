import React, {useState} from "react"

const Bills = ({title, bills, total, modifyItem, deleteItem, modifyOverlay, submitModify,titleHandler})=>{



    return(
        <div className="expense-items expense-categories">
            <div className="title">
                <h2>Bills</h2>
            </div>
            {bills.map(bill=>{
                    return(
                        <div key={bill.id} className={modifyOverlay? "item-overlay": "item"}>
                            <div className={modifyOverlay ? "modify-overlay": "modify-overlay-visible"}>                     
                                <input type="text" value={bill.title} onChange={titleHandler} className="input-boxes"/>
                                <input type="text" value={bill.expense}/>
                                <select>
                                    <option value="1">Bills</option>
                                    <option value="2">Grocery/Household</option>
                                    <option value="3">Fun</option>
                                    <option value="4">Emergency</option>
                                    <option value="5">Savings</option>
                                </select>
                                <div className="buttons">                                    
                                    <button className="btn modify" onClick={()=>submitModify()}>Submit</button>
                                    <button className="btn" onClick={()=>modifyItem(bill.id)}>Cancel</button>
                                </div>
                            </div>
                            
                            <p className={modifyOverlay? "item-details-bg" : "item-details"}>{bill.title}</p>
                            <p className={modifyOverlay? "item-details-bg" : "item-details"}>${bill.expense.toFixed(2)}</p>

                            <div className="buttons" className={modifyOverlay? "btns-invisible" : "btns"}>                                    
                                <button className="btn modify" onClick={()=>modifyItem(bill.id)}>Modify</button>
                                <button className="btn" onClick={()=>deleteItem(bill.id)}>Delete</button> 
                            </div>


                        </div>
                    )
                })}
            <p>Total: {total().toFixed(2)}</p>
        </div>
    )
}

export default Bills