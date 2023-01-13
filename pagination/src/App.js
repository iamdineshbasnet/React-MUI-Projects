import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Blog from "./Components/Blog";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Main>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </Main>
            </BrowserRouter>
        </div>
    );
}

export default App;
