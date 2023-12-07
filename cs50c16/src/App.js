import logo from './logo.svg';
import './App.css';
import ProjectCards from './components/projectCards/projectCards';

function App() {
  return (
    <div className="App">
      {/*d
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
      </header>
      */} 
      <ProjectCards />
    </div>
  );
}

export default App;
