export const TransactionReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TRANSACTION":{
            return [action.payload , ...state] 
        }

        case "DEL_TRANSACTION":{
            return [action.payload, ...state]
        }
            
        default:
            return state;}

    
}
   

