import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Main from "./Components/Main";
import CreateUser from "./Components/CreateUser";
import Homepage from "./Components/Homepage";
import UserList from "./Components/UserList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/create-user" element={<CreateUser/>}/>
            <Route path="/user-list" element={<UserList/>}/>
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
}

export default App;
