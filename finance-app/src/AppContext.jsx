import React from 'react'

const AppContext = React.createContext()

function ContextProvider(props) {

    //const [count, setCount] = React.useState(0)

    const [description, setDescription] = React.useState({detail: '', isFavorite: false})
    const [amount, setAmount] = React.useState(0)

    const [txList, setTxList] = React.useState([])

    const amountRef = React.useRef(null)


    function handleDescriptionInput (e) {
        setDescription( (prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        } )
    }

    function handleAmountChange(){
        setAmount(amountRef.current.value)
    }

    // function addCount() {
    //     setCount( prevCount => prevCount+= 1)
    // }

    function addTransaction(event){
        //e.preventDefault()
        event.preventDefault()

        setTxList(prevList => {
            return [
                ...prevList,
                {detail: description.detail,
                amount: amount}
            ]
        })
        

        setAmount(0)
        setDescription({detail: '', isFavorite: false})
    }

    return(
        <AppContext.Provider value={ {
                description: description,
                amount: amount,
                amountRef: amountRef,
                handleDescriptionInput: handleDescriptionInput,
                handleAmountChange: handleAmountChange,
                txList: txList,
                addTransaction: addTransaction
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export {ContextProvider, AppContext}