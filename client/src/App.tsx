import React from 'react';
import { Header } from './components/Header/Header';
import { NavScreen } from "./screens/NavScreen/NavScreen";
import './App.css';

function App() {

  return (
    <div className="App">
        <Header headerText={'Regions'} />
        <NavScreen/>
    </div>
  );
}

export default App;
