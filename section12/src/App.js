import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log('App Run in App.js');
  const handleP = useCallback(() => {
    if (allowToggle) {
      setShowP((prev) => !prev);
    }
  }, [allowToggle]);
  const allowToggleHandle = useCallback(() => {
    setAllowToggle((prev) => !prev);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandle}>Allow Toggling</Button>
      <Button onClick={handleP}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
