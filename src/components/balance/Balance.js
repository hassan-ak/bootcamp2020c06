import React, { useContext } from 'react';
import { GlobalContext } from '../../hooks/GlobalContext';
import './Balance.css'

export const Balance = () => {
    const context = useContext(GlobalContext)
    const amounts = context.transactions.map(transaction => transaction.amount) ;
    const total = amounts.reduce((acc,item)=>(acc+=item),0);
    const sign = total<0? '-':'';
    return (
        <div className="balance">
            <h4>Balance</h4>
            <h1>
                <span>{sign}</span>
                <span>${(Math.abs(total)).toFixed(2)}</span>
            </h1>
        </div>
    )
}
