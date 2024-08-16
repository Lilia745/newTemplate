import './App.css';
import About from './Components/About/About';
import Client from './Components/Client/Client';
import FeaturedCase from './Components/FeaturedCase';
import Header from './Components/Header/Header';
import Project from './Components/Project/Project';
import Section from './Components/Section1';
import Section2 from './Components/Section2';
import Team from './Components/Team/Team';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
          <Header/>
          <Section/>
          <Section2/>
          <About/>
          <Project/>
          <FeaturedCase/>
          <Testimonial/>
          <Team/>
          <Client/>
    </div>
  );
}

export default App;
