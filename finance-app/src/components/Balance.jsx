import { AppContext } from "../AppContext-useReducer"
import React from 'react'

export default function Balance() {

    const context = React.useContext(AppContext)

    const amounts = context.txList.map(transaction => transaction.amount)
    //console.log("Amount: ", amounts)
    const total = amounts.reduce( (acc, item) => (acc += item), 0 ).toFixed(2)

    return(
        <>
        <h4>YOUR BALANCE:</h4>
        <h1 id="balance">${total}</h1>
        </>
    )
}