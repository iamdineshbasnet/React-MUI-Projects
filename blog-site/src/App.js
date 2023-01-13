import {useState} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Main from "./Components/Main";
import CreateUser from "./Components/CreateUser";
import Homepage from "./Components/Homepage";
import UserList from "./Components/UserList";
function App() {
  const [editData, setEditData] = useState({edit: false, value: {firstname: '', lastname: ''}})
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/create-user" element={<CreateUser editData={editData}/>}/>
            <Route path="/user-list" element={<UserList setEditData={setEditData}/>}/>
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
