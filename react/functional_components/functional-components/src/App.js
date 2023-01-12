import './App.css';
import Person from './components/Person'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Header firstName={ "Bill" } lastName={ "Justice" } />
    </div>
  );
}

export default App;


