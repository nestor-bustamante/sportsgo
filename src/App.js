import '../src/assets/css/main.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <div>
      <div className="sportsgo-wrapper">
        <Header />
        <Home />
      </div>
      <Footer />
    </div>

  );
}

export default App;
