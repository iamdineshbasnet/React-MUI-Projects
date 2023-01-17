import './App.css'
import Main from './Components/Main'
import Homepage from './Components/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
function App() {
  return (
    <div className="App">
        <Homepage/>
    </div>
  );
}

export default App;
