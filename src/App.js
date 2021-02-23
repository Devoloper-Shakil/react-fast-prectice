import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const frends=[{name:"himel", age:20} ,{name:"shakil", age:25} ,{name:"alamin", age:22}]
  
  return (
    <div className="App">
      <header className="App-header">
      {
       frends.map(frend=><Freands name={frend.name} age={frend.age} ></Freands>)
      }
        
       <LoveCount></LoveCount>
       <MoveCount></MoveCount>
       <Hedding name="Manna" sylary="5000"></Hedding>
       <Hedding name="Fime" sylary="4000"></Hedding>
       <Hedding name="Nayn" sylary="588000"></Hedding>
       <Hedding name="Ala min" sylary="55000"></Hedding>
       <Hedding name="Bijoy" sylary="500090"></Hedding>
        
       
      </header>
    </div>
  );
}
function Hedding(props) {
 const heddingStyle={
    border:'2px solid Yellow',
    margin:'10px',
   
   
    
  }
 

  return(
    <div style= {heddingStyle}>
      <h1 >Banglar Don:{props.name}</h1>
      <h2 >Banglar Doner Sylarey:{props.sylary}</h2>
    </div>
  );
  
}

 function MoveCount() {
  const [count,setCount]= useState(10);

 const clickHendeler=()=>{setCount(count+1);  }
 const decreg =()=>{
   if(count>0){
    setCount(count-1);}
   }
  
    return(
      <div> 
        <h3>counter:{count}</h3>
        <button onClick={clickHendeler}>click count</button>
        <button onClick={decreg}>decrege</button>
      </div>
    )
    
  }

  function LoveCount() {
    const [love, setLove]= useState(0);
    const loveHendel=()=>{
      setLove(love+1);
    }
    const hedHendel=()=>{
      if(love>0){
        setLove(love-1);
      }
    }

    return(
      <div>
        <h1>Love Counter</h1>
        <h3>Love Count:{love}</h3>
        <button onClick={loveHendel}>Love</button>
        <button onClick={hedHendel}>heard</button>
      </div>
    )
    
  }
  function Freands(props) {
  return(
    <div>
       <h1>Name: {props.name}</h1>
        <h2>Roll: {props.age}</h2> 
    </div>
  ) 
    
  }

export default App;
