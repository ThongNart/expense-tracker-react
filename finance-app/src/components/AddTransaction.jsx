import React from "react"
import {nanoid} from 'nanoid'

//import { AppContext } from "../AppContext"
import {AppContext} from "../AppContext-useReducer.jsx"

export function AddTransaction(){

    const context = React.useContext(AppContext)

    const [description, setDescription] = React.useState('')
    const [amount, setAmount] = React.useState(0)

    // console.log(context.description)
    // console.log(context.amount)
    // console.log("TX List: ",context.txList)

    function handleSubmitClick(e){
        e.preventDefault()
        const newTx =  {id: nanoid(), detail: description, amount: amount}

        context.addTransaction(newTx)
        setAmount(0)
        setDescription('')
    }

    return (
        <>
            <h3>Add new transaction</h3>

            <form>

                <div className="form-control">
                    <label htmlFor="text">Descriptions</label>
                    <input 
                        
                        type="text"
                        placeholder="Enter text..." 

                        name="detail"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                        <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input 
                        type="number"  
                        placeholder="Enter amount..."

                        ref={context.amountRef} 
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                </div>
                <button className="btn" onClick={handleSubmitClick}>Add Transaction</button>
            </form>


        </>
    )
}