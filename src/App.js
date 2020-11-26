import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { TransactionProvider} from './components/transactionContext';


function App() {

  return (


   <TransactionProvider>
     <Header />
    </TransactionProvider>
    
  );
}

export default App;
