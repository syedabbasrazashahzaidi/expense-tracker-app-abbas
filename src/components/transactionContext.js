import React, {createContext, useReducer} from 'react';
import {TransactionReducer} from './transactionReducer.js';
// import {Header} from './Header.js';
let transaction = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Chocolate" },
    { amount: -200, desc: "Attaa" }
]

export const transactionContext=createContext(transaction);

export const TransactionProvider=({children})=>{
    const [state, dispatch] = useReducer(TransactionReducer, transaction);

    function Addtransaction(transObj) {
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
// Delete function
    function Deltransaction(key) {
        dispatch({
            type:"DEL_TRANSACTION",
            payload:key
        })
    }
        return ( <transactionContext.Provider value={{
            transaction: state,
            Addtransaction,
            Deltransaction
         } }>
                {children}
        </transactionContext.Provider>)
}
