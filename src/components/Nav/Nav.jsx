import { NavLink } from "react-router-dom";
// import SearchBar from '../SearchBar/SearchBar';
import style from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faCartShopping} />
                </NavLink>
            </div>

            {/* <SearchBar /> */}
        </nav>
    );
};

export default Nav;
