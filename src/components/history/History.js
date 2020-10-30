import React from 'react'
import './History.css'

export const History = () => {
    return (
        <div className="transaction-history">
            <h3>Transaction History</h3>
            <ul class="list">
                <li class="income-h">In<span>$100</span>
                    <button class="del">X</button>
                </li>
                <li class="expense-h">Out<span>-$100</span>
                    <button class="del">X</button>
                </li>
                <li class="income-h">In1<span>$250</span>
                    <button class="del">X</button>
                </li>
                <li class="expense-h">Out1<span>-$70</span>
                    <button class="del">X</button>
                </li>
            </ul>
        </div>
    )
}
