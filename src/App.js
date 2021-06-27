import React from 'react';
import './App.css';
import Footer from '../src/components/Footer'
import TextEditor from '../src/screens/TextEditor'

function App() {
  return (
    <>
    <h1 className="text-6xl text-center">ONLINE WEB EDITOR</h1>
    <TextEditor />
    <Footer />
    </>
  );
}

export default App;
