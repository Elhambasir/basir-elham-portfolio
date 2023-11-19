import './assets/js/script';
import './App.css';
import Header from './components/header/Header';
import { Services } from './components/services/Services';
import { Work } from './components/works/Work';
import { WorkProcess } from './components/workProcess/WorkProcess';
import Newsletter from './components/newsletter/Newsletter';
import About from './components/about/About';
import ReactGA from 'react-ga';

const trackingId = "UA-293676977-2"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Services />
      <Work />
      <WorkProcess />
      <About />
      <Newsletter />
    </div>
  );
}

export default App;
