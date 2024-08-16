import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import Section from './Components/Section1';
import Section2 from './Components/Section2';

function App() {
  return (
    <div className="App">
          <Header/>
          <Section/>
          <Section2/>
          <About/>
          <Project/>
    </div>
  );
}

export default App;
