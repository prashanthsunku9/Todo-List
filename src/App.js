import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Display from './components/Display';
import { useState } from 'react';
import { GlobalProvider } from './GlobalContext';




function App() {

  const [sta,nsta]=useState([]);

  const fun=(data)=>{
      nsta([...sta,data.todo]);
  }
  return (
    <div className='container mt-3'>
       <div className='row'>
      <div className='col-sm-6'>
      <Home send={fun}/>
     
</div>
<div className='col-sm-6'>
   
      <Display recieve={sta}/>
</div>
      
    </div>
    </div>

   
  );
}

export default App;
