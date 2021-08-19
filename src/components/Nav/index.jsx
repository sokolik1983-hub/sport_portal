import mainNav from "../../appConfig";
import s from "./index.module.scss";


const Nav = () => {
    return (
        <ul className={s.mainNav}>
            {
                mainNav.map(item =>
                    <li key={item.id}>
                        <a href={item.to}>
                            {item.title}
                        </a>
                    </li>
                )
            }
        </ul>
    )
}
export default Nav;