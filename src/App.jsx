import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Section from './Components/Section1';
import Section2 from './Components/Section2';

function App() {
  return (
    <div className="App">
          <Header/>
          <Section/>
          <Section2/>
          <About/>
    </div>
  );
}

export default App;
