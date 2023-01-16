import React from 'react'
import { AppContext } from '../AppContext-useReducer'

export default function IncomeExpense() {

    const context = React.useContext(AppContext)

    const income = context.txList.map(transaction => transaction.amount > 0 ? transaction.amount : 0)
    //console.log("INCOME: ",income)
    const totalIncome = income.reduce( (acc, item) => (acc += item), 0 ).toFixed(2)

    const expense = context.txList.map(transaction => transaction.amount < 0 ? transaction.amount: 0)
    const totalExpense = expense.reduce( (acc, item) => (acc += item), 0 ).toFixed(2)

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{totalIncome}</p>

            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{totalExpense}</p>
            </div>
        </div>
    )
}