import './assets/js/script';
import './App.css';
import Header from './components/header/Header';
import { Services } from './components/services/Services';
import { Work } from './components/works/Work';
import { WorkProcess } from './components/workProcess/WorkProcess';
import Newsletter from './components/newsletter/Newsletter';

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Services />
      <Work />
      <WorkProcess />
      <Newsletter />
    </div>
  );
}

export default App;
