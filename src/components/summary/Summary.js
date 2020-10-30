import React from 'react'
import './Summary.css'

export const Summary = () => {
    return (
        <div className="income-expense">
            <div>
                <h4>Income</h4>
                <p class="income-m">
                    $ 0.00
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p class="expense-m">
                    $ 0.00
                </p>
            </div>
        </div>
    )
}
