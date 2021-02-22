import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       
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

export default App;
