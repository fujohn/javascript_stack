import './App.css';
import Person from './components/Person'
import Header from './components/Header'
import Hooks from './components/Hooks'

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Header firstName={ "Bill" } lastName={ "Justice" } />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <Hooks />
    </div>
  );
}

export default App;


