import './App.css';
import Person from './components/Person'
import Header from './components/Header'
import Hooks from './components/Hooks'
import MyNewComponent from './components/MyNewComponent'
import UserForm from './components/UserForm';
import Groceries from './components/Groceries';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import MyComponent from './components/MyComponent';

import React, { useState } from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
    
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  return (
    <div className="App">
      <Person />
      <Person />
      <Header firstName={ "Bill" } lastName={ "Justice" } />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      <h2>Hooks</h2>
      <Hooks />
      <h2>Forms</h2>
      <UserForm />
      <h2>Children</h2>
      <MyNewComponent header={ "Header Prop" }> 
      {/* everything in between is considered as children */}
          <h1>These are children</h1>
          <p>This is a child</p>
          <p>This is another child</p>
          <p>This is even another child</p>
      </MyNewComponent>  
      <h2>Iterating with map</h2>
      <Groceries />
      <h2>Lifting State</h2>
      <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message={ currentMsg } />
      <h2>Callbacks</h2>
      <MyComponent movies={['Saving Private Ryan', 'Ted', 'Get Hard']} />


    </div>
  );
}

export default App;


