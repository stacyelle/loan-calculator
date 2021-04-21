import './App.css';
import LoanCalculator from './components/LoanCalculator/LoanCalculator';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={process.env.REACT_APP_LOGO_URL} className='App-logo' alt='logo' />
      </header>
      <LoanCalculator />
    </div>
  );
}

export default App;
