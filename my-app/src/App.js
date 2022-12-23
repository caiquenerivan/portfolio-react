
import './App.css';
import Main from './components/Main';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App ContentBox">
      <div >
        <Main />
        <Skills />
        <Portfolio />
        <About />
        <Footer />

      </div>
    </div>
  );
}

export default App;
