export function OutboundReducer(state, action) {
    switch(action.type) {
        case 'delete-transaction':
            return {
                ...state,
                txDetails: state.txDetails.filter( tx => tx.id !== action.payload.id)
             }
        case 'add-transaction':
            return {
                ...state,
                txDetails: [...state.txDetails, action.payload.transaction]
            }
        default:
            return state
    }
}