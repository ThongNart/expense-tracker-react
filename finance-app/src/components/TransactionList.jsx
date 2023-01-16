import React from "react"

//import { AppContext } from "../AppContext"
import { AppContext } from "../AppContext-useReducer"

export function TransactionList() {

     const context = React.useContext(AppContext)

     console.log(context.txList)

    const renderTxList = context.txList.map( (item,index) => {
        const classy =  item.amount > 0 ? "plus" : "minus"
        const sign = item.amount > 0 ? "+" : "-"
        return (
            <li className={classy} key={index}>
                    {item.detail}
                    <span>{sign}${Math.abs(item.amount)}</span>
                    <button className="delete-btn" onClick={() => context.deleteTransaction(item.id)}>X</button>
            </li>
        )
    })
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {/* <li className="minus">
                    Demo Expense<span>-$400</span><button className="delete-btn">X</button>
                </li> */}
                {renderTxList}
            </ul>
        </div>
    )
}