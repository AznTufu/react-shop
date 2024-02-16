import React, { useState } from 'react';
import './App.css';
import HomeScreen from './pages/HomeScreen';
import MyButton from './components/MyButton';
import MyButtonAlert from './components/MyButtonAlert';
import Input from './components/InputText';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const launchAlert = () => {
    alert('Button clicked');
  }
  const launchConsoleLog = () => {
    console.log('Button clicked');
  }

  return (
    <div className="App">
      <HomeScreen  />
      <MyButton onClick={launchConsoleLog} text="console log"/>
      <MyButtonAlert onClick={launchAlert} text="alert"/>
      <Input onChange={(e) => setEmail(e.target.value)} />
      <Input onChange={(e) => setPassword(e.target.value)} />

      <div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
}

export default App;
