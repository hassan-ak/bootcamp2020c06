import React, { useContext } from 'react';
import { GlobalContext } from '../../hooks/GlobalContext';
import './Summary.css'

export const Summary = () => {
    const context = useContext(GlobalContext)
    const amounts = context.transactions.map(transaction => transaction.amount) ;
    const income = amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense1 = amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0);
    const expense = (Math.abs(expense1)).toFixed(2);
    return (
        <div className="income-expense">
            <div>
                <h4>Income</h4>
                <p class="income-m">
                    $ {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p class="expense-m">
                    $ {expense}
                </p>
            </div>
        </div>
    )
}
