import { NavLink } from "react-router-dom";
// import SearchBar from '../SearchBar/SearchBar';
import style from "./Nav.module.scss";
const Nav = () => {
    const activeStyle = ({ isActive }) =>
        isActive ? `${style.Link} ${style.Link_Active}` : style.Link;

    return (
        <nav className={style.Bar}>
            <div>
                <NavLink className={activeStyle} to="/">
                    Home
                </NavLink>

                <NavLink className={activeStyle} to="/cart">
                    Cart
                </NavLink>
            </div>

            {/* <SearchBar /> */}
        </nav>
    );
};

export default Nav;
