import React from 'react';
import './App.css';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import TextEditor from '../src/screens/TextEditor'

function App() {
  return (
    <>
    <h1 className="text-6xl text-center">ONLINE EDITOR</h1>
    <TextEditor />
    <Footer />
    </>
  );
}

export default App;
