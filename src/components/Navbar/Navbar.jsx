import { NavLink } from "react-router-dom"; // Импортируем компоненту navlink из пакета router-dom
import SideBar from "./../Sidebar/Sidebar"; // Импорт отдельной компоненты с друзьями
import nav from "./Navbar.module.css"; // Импортруем стили для данной компоненты



const Navbar = (props) => { 
  
  const setActive = navData => navData.isActive ? nav.active : nav.item; // Функция для создания активного класса ссылке и переключения его впоследствии
  
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink> 
      </div>
      <div className={nav.item}>
        <NavLink to="/messages" className={setActive}>Messages</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/news" className={setActive}>News</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={nav.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
      <SideBar sidebarData={props.state.sideBar}/>
    </nav>
  );
};

export default Navbar; // Экспортируем компоненту по дефолту
