import logo from './logo.svg';
import './App.css';

function App() {
  const success = () => {
    fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
    }
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Here's a success button</p>
        <button onClick={{success}}>Success</button>
        <p>Here's a 400 button</p>
        <button onClick={alert('yo')}>Success</button>
      </header>
    </div>
  );
}

export default App;
