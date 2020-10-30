import React, {useState} from 'react';
import './AddTransaction.css'

export const AddTransaction = () => {

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()

    return (
        <div>
            <h3>
                Add Transactions
            </h3>
            <form>
                <div>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            placeholder="Enter Description"
                            value={description}
                            onChange = {(e)=>{setDescription(e.target.value)}}/>
                    <small>
                        Kindly Enter Description
                    </small>
                </div>
                <div>
                    <label htmlFor="amount">
                        Amount
                    </label>
                    <input  type="number"
                            step="0.00000000001" 
                            placeholder="Enter Amount"
                            value={amount}
                            onChange = {(e)=>{setAmount(e.target.value)}}/>
                    <small>
                        Kindly Enter Amount
                    </small>
                </div>
                <div className="btn">
                    <button className="add-income"> 
                        Add Income
                    </button>
                    <button className="add-expense">
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
}
