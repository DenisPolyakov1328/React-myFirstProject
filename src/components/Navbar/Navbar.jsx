import { NavLink } from "react-router-dom"; // Импортируем компоненту navlink из пакета router-dom
import nav from "./Navbar.module.css"; // Импортруем стили для данной компоненты

const setActive = navData => navData.isActive ? nav.active : nav.item; // Функция для создания активного класса ссылке и переключения его впоследствии

const Navbar = () => { 
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
    </nav>
  );
};

export default Navbar; // Экспортируем компоненту по дефолту
