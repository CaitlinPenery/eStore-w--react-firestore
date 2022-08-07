import { NavLink } from "react-router-dom";
// import SearchBar from '../SearchBar/SearchBar';
import classes from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav className={classes.Bar}>
            <div>
                <NavLink className={classes.Link} to="/">
                    Home
                </NavLink>
                <NavLink className={classes.Link} to="/cart">
                    <FontAwesomeIcon icon={faCartShopping} size="1x" />
                </NavLink>
            </div>

            {/* <SearchBar /> */}
        </nav>
    );
};

export default Nav;
