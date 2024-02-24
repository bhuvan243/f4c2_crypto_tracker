import './App.css';
import HomePage from './Components/Home/HomePage';
import CoinDataProvider from './context/coinDataProvider';
function App() {
  return (
    <div className="App">
      <CoinDataProvider >
        <HomePage />
      </CoinDataProvider>
    </div>
  );
}

export default App;
