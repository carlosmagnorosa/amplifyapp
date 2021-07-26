import logo from './logo.svg';
import './App.css';
import { MyCounter } from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCounter/>
      </header>
    </div>
  );
}

export default App;
