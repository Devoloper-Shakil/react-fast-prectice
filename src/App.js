import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
       <Hedding></Hedding>
       <Hedding></Hedding>
       <Hedding></Hedding>
       <Hedding></Hedding>
       <Hedding></Hedding>
        
       
      </header>
    </div>
  );
}
function Hedding() {
 const heddingStyle={
    border:'2px solidred',
    margin:'10px',
    background:'red'
  }

  return(
    <div style= {heddingStyle}>
      <h1 >Bangladhe is a very small</h1>
      <h2 >bangli prepul is a fonni</h2>
    </div>
  );
  
}

export default App;
