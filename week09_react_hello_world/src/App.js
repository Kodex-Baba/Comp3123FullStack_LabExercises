import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from "./components/SayHello";

function App() {
  return (
    <div className='App'>
        <img src={logo} alt="App Logo"/>
      <h1>Hello</h1>
      <h1>Test</h1>
        <Welcome></Welcome>
        <Greetings name="GBC"/>
        <SayHello fname= "Akorede" lname="Osunkoya"/>
        <SayHello fname= "Akorede" lname="Daniel"/>
        <SayHello fname= "Samuel" lname="Gallego"/>
      <a
          className="App-link"
          href="https://kodex-baba.github.io/"
          target="_blank"
          rel="noopener noreferrer"
      >
        Kodex-Baba </a>
    </div>
  );
}

export default App;
