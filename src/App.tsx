import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={process.env.REACT_APP_LOGO_URL} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
