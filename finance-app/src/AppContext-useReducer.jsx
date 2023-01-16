import React from 'react'
import { useRef,useReducer, createContext } from 'react'
import { OutboundReducer } from './OutboundReducer'
import {nanoid} from 'nanoid'

const initialState = {
    txDetails: [
        {id: nanoid(), detail: 'Flower', amount: -20},
        {id: nanoid(), detail: 'salary', amount : 1700},
        {id: nanoid(), detail: 'dinner for 2', amount: -150},
        {id: nanoid(), detail: 'side hustle payment', amount: 90}
    ],
    description: {detail: '', isFavorite: false},
    amount: 0

}

export const AppContext = createContext(initialState)

export const ContextProvider = (props) => {

    const [state, dispatch] = useReducer(OutboundReducer, initialState)

    const amountRef = useRef(null)
    
    //Delete Transaction
    function deleteTransaction(id) {
        dispatch({type: 'delete-transaction', payload: {id: id}})
    }

    function addTransaction (transaction) {
        dispatch( {type: 'add-transaction', payload: {transaction: transaction}})
    }


    return (
       <AppContext.Provider value={{
                txList: state.txDetails,
                description: state.description,
                amount: state.amount,
                amountRef: amountRef,

                addTransaction: addTransaction,
                deleteTransaction: deleteTransaction

       }}>
            {props.children}
        </AppContext.Provider>
    )
}