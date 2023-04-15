import { MainPage } from "./pages/main_page/MainPage";
import { Room } from "./pages/room/Room";
import { SingIn } from "./pages/auth/SingIn";
import { SingUp } from "./pages/auth/SingUp";
import { Members } from "./pages/members/Members";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/Room" element={<Room />}/>
          <Route path="/SingIn" element={<SingIn />}/>
          <Route path="/SingUp" element={<SingUp />}/>
          <Route path="/Members" element={<Members />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
