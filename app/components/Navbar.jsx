import "../styles/components/Navbar.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    // const handleRedirectToLogin = () => {
    //     navigate("/login");
    // }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
        
    };

    const handleRedirectToHome = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="top-header">

                <div className="logo-container">
                    <img
                        src="/logo-head.png"
                        alt="Lulu Rayyan Group"
                        className="logo"
                    />
                    {/* <span className="sub-title">LULU RAYYAN GROUP W.L.L</span> */}
                </div>
            </div>
            <nav className="bottom-header">
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ?
                        <i className="fa-solid fa-xmark" />
                        : <i className="fa-solid fa-bars" />}
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={handleRedirectToHome}>HOME</li>
                    <li>
                        CATEGORY <i className="fas fa-chevron-down" />
                    </li>
                    <li>SHOP BY BRANDS</li>
                    <li>BUYING GUIDE</li>
                    <li>BEST SELLING</li>
                    <li>
                        COMPANY <i className="fas fa-chevron-down" />
                    </li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
        </div>
    );
}
