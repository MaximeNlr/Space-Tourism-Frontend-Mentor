import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import Assets from "../../assets/Assets";

export default function Header() {
    const location = useLocation();
    return (
        <section className="headerContainer">
            <div className="leftHeader">
                <img src={Assets.logo_header} alt="" />
                <div className="lineHeader"></div>
            </div>
            <nav>
                <NavLink
                    to="/"
                    className={`navLink ${location.pathname === "/" ? "active" : ""}`}
                >
                    <span className="numbersHeader">00</span> HOME
                </NavLink>
                <NavLink
                    to="/Destination"
                    className={`navLink ${location.pathname === "/Destination" ? "active" : ""}`}
                >
                    <span className="numbersHeader">01</span> DESTINATION
                </NavLink>
                <NavLink
                    to="/Crew"
                    className={`navLink ${location.pathname === "/Crew" ? "active" : ""}`}
                >
                    <span className="numbersHeader">02</span> CREW
                </NavLink>
                <NavLink
                    to="/Technology"
                    className={`navLink ${location.pathname === "/Technology" ? "active" : ""}`}
                >
                    <span className="numbersHeader">03</span> TECHNOLOGY
                </NavLink>
            </nav>
        </section >
    )
}