import React, {useState, useContext} from 'react';
import {GlobalContext} from '../../hooks/GlobalContext'
import './AddTransaction.css'

export const AddTransaction = () => {

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()
    const [desStyle,setDesStyle] = useState("")
    const [amStyle,setAmStyle] = useState("")

    const context = useContext(GlobalContext)

    const addNewTransaction=(a)=>{

        const newTransaction = { 
            id: Math.floor(Math.random()*10000000000),
            description,
            amount: (Math.abs(+amount))*a
        }
        
        if ((typeof description == 'undefined' || typeof amount == 'undefined')
            ||(description.length === 0 || amount.length === 0)) 
            {}
        else 
            {
                context.addTransaction(newTransaction);
                setTimeout(() => {
                    setDescription('');
                    setAmount('');
                }, 30);
            }
    }

    // Check Error
    const checkDesStyle = ()=>{
        if (typeof description == 'undefined' || description.length === 0){
            setDesStyle("smallError")
        } else {
            setDesStyle("")
        }
    }
    const checkAmsStyle = ()=>{
        if (typeof amount == 'undefined' || amount.length === 0){
            setAmStyle("smallError")
        }else{
            setAmStyle("smallSuccess")
        }
    }

    // On submit Checks
    const onSubmit = (e) => {
        e.preventDefault();
        checkDesStyle();
        checkAmsStyle();
    }

    return (
        <div>
            <h3>
                Add Transactions
            </h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="description">
                        Description
                    </label>
                    <input  type="text" 
                            placeholder="Enter Description"
                            value={description}
                            onChange = {(e)=>{setDescription(e.target.value)}}/>
                    <small className={desStyle}>
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
                    <small className={amStyle}>
                        Kindly Enter Amount
                    </small>
                </div>
                <div className="btn">
                    <button className="add-income" onClick={(a)=>addNewTransaction(1)}> 
                        Add Income
                    </button>
                    <button className="add-expense" onClick={(a)=>addNewTransaction(-1)}>
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    )
}
