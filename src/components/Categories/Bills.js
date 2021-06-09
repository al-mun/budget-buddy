import React, {useState} from "react"

const Bills = ({title, bills, total, deleteItem, submitModify,titleHandler})=>{

const [activeIndex, setActiveIndex]=useState(0)

const modifyItem = (id)=>{
    setActiveIndex(id)
    console.log(id)
}
const cancel = ()=>{
    setActiveIndex(0)
}

    return(
        <div className="expense-items expense-categories">
            <div className="title">
                <h2>Bills</h2>
            </div>
            {bills.map(bill=>{
                    return(
                        <div key={bill.id} className="item">
                            <div className={activeIndex === bill.id ? "item-details-invisible": "item-details"}>
                                <p>{bill.title}</p>
                                <p>${bill.expense.toFixed(2)}</p>
                                
                                <div className="buttons">                                    
                                    <button className="btn modify" onClick={()=>modifyItem(bill.id)}>Modify</button>
                                    <button className="btn" onClick={()=>deleteItem(bill.id)}>Delete</button> 
                                </div>

                            </div>
                                <div className={activeIndex === bill.id ? "item-details": "item-details-invisible"}>                     
                                    <input type="text" value={bill.title} onChange={titleHandler} className="input-boxes"/>
                                    <input type="text" value={bill.expense} onChange={titleHandler}/>
                                    <select>
                                        <option value="1">Bills</option>
                                        <option value="2">Grocery/Household</option>
                                        <option value="3">Fun</option>
                                        <option value="4">Emergency</option>
                                        <option value="5">Savings</option>
                                    </select>
                                    <div className="buttons">                                    
                                        <button className="btn modify" onClick={()=>submitModify()}>Submit</button>
                                        <button className="btn" key={bill.id} onClick={()=>cancel()}>Cancel</button>
                                    </div>
                                </div>
                            
                        </div>
                    )
                })}
            <p>Total: {total().toFixed(2)}</p>
        </div>
    )
}

export default Bills