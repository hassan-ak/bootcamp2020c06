// Reducer
export const AppReducer = (state,action)=>{
    switch (action.type) {
        case 'DEL':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state
    }
}