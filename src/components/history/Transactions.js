import React from 'react'
import './History.css';

export const Transactions = (props) => {

    const sign =props.transaction.amount <0 ? '-' : '+';

    return (
        <div className="list">
            <li className= {props.transaction.amount < 0? "expense-h":"income-h"}>
                    {props.transaction.description} 
                    <span>
                        {sign}${Math.abs(props.transaction.amount)}
                    </span>
                    <button className="del"
                    onClick={()=>{props.delete(props.transaction.id)}}>
                        X
                    </button>
                </li> 
        </div>
    )
}
