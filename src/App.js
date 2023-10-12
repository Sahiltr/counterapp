import React,{useState} from 'react';
import './App.css';
import CustomButton from './Button';

function Counter() {
  const[count,setCount]=useState(0);
  const increamentCount=()=>{
    setCount(count+1);
  };
  const decreamentCount=()=>{
    setCount(count-1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <CustomButton onClick={increamentCount} label="Increament"></CustomButton>
      <CustomButton onClick={decreamentCount} label="Decreament"></CustomButton>   
    </div>
  );
}
function App(){
  return(
    <div className='app'>
      <Counter/>
      </div>
  );
}

export default App;