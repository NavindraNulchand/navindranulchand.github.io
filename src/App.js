import logo from './navindra_react.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Navindra Nulchand and I will master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/NavindraNulchand"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
