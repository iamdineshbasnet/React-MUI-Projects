import './App.css'
import {useState} from 'react'
import Homepage from './Components/Homepage'
import Comments from './Components/Comments'
import Main from './Components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path='/' element={<Homepage info={info} setInfo={setInfo}/>}/>
            <Route path='/issue/:issueNumber'  element={<Comments info={info}/>}/>
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
