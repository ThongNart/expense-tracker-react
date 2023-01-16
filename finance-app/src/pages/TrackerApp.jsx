import { AppContext } from "../AppContext"
import React from 'react'

//Components
import Header from "../components/Header"
import Balance from "../components/Balance"
import IncomeExpense from "../components/IncomeExpense"
import { TransactionList } from "../components/TransactionList"
import { AddTransaction } from "../components/AddTransaction"

export default function TrackerApp(){

    const context = React.useContext(AppContext)
    return(
        <div>
            <Header/>
            {/* <h2>{context.count}</h2>
            <button onClick={context.addCount}>Add Count</button> */}

            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </div>
    )
}