import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App - главная компонента, которая содержит в себе роутинг (переход по вкладкам приложения) и сами компоненты(отдельные "страницы" приложения)
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}
            />} />
            <Route path="/messages/*" element={<Messages messagePage={props.state.messagePage} dispatch={props.dispatch}/>} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
