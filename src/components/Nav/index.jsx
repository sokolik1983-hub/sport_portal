import {mainNav} from "../../appConfig";
import {NavLink} from "react-router-dom";
import s from "./index.module.scss";


const Nav = () => {
    return (
        <ul className={s.mainNav}>
            {
                mainNav.map(({id, to, title}) =>
                    <li key={id}>
                        <NavLink exact activeClassName={s.active} to={to}>
                            {title}
                        </NavLink>
                    </li>
                )
            }
        </ul>
    )
}
export default Nav;