import { useNavigate } from 'react-router-dom'; //Hook --> useNavigate
import './App.css';

function App() {

 const navigate =useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Test Project !</h1>
        <button className='users-button' onClick={()=> navigate('/users')}>Users</button>
      </header>
    </div> 
  );
}

export default App;
