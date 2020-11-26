import React, {useContext, useState} from 'react'
import { transactionContext } from './transactionContext';


export const Header = () => {

 let {transaction, Addtransaction} =useContext(transactionContext);

 let [newDesc, setDesc]= useState("");
 let [newAmount, setAmount]= useState(0);

 

 const handleAddition = (event)=>{
    event.preventDefault();

    if(Number(newAmount) === 0){
        alert("Please enter some amount")
        return false;
    }
    Addtransaction({
        desc: newDesc,
        amount: Number(newAmount)
    })
  }

// delete function

const handleDelete = (ind,event)=>{
    event.preventDefault();
    ind=[];
}

  const totalIncome =()=>{
      let income=0;
      for(var i=0; i < transaction.length; i++){
      if(transaction[i].amount > 0)
      income += transaction[i].amount
  }
        return income;
}

const totalExpense =()=>{
    let expense=0;
    for(var i=0; i < transaction.length; i++){
    if(transaction[i].amount < 0)
    expense += transaction[i].amount
}
      return expense;
}

    return (
        <div className="container" >     
            <h1 className="text-center">EXPENSE TRACKER</h1>
        
 
 

 <h3>YOUR BALANCE <br/> ${totalIncome() + totalExpense()}.00 </h3>

 <div className="expense-container">
 <h2>INCOME <br/> ${totalIncome()}.00 </h2>
 <h2>EXPENSE <br/> ${totalExpense()}.00 </h2>
 </div>

<h3>History</h3>
<hr/>



<button className="btn-delete" onClick={handleDelete}></button><ul className="history-list">

{transaction.map((transObj, ind) => {
  return( <li key={ind}>
  <span>{transObj.desc}</span>
  <span>{transObj.amount}</span>
  </li>
  
  )
})}
  
</ul>

<h3>Add New Transaction</h3>
<hr/>

<form className="form-css" onSubmit={handleAddition}>
  <label>
                Enter Your Transaction Description:
  </label>
  <br/>
  <input type="text" placeholder="eg: Utility Bill... " onChange={(ev)=> setDesc(ev.target.value) } required/>

  <br/>

  <label>
                Enter Your Amount:
  </label>
  <br/>
  <input type="number" placeholder="eg: 2000... " onChange={(ev)=> setAmount(ev.target.value)} required/>

  <br/>
  <br/>

  <input type="submit" value="Add Transaction" />
</form>

</div >



    );
}
