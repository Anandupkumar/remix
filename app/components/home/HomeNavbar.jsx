import "../../styles/components/home/HomeNavbar.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function HomeNavbar() {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [authToken, setAuthToken] = useState(false);

    useEffect(() => {
        const isVerified = localStorage.getItem("authToken");
        if (isVerified && isVerified !== "") {
            setAuthToken(true);
        } else {
            setAuthToken(false);
        }

    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleRedirectToLogin = () => {
        navigate("/login");
    }

    const handleRedirectToProfile = () => {
        navigate("/my-account");
    }

    const handleRedirectToCart = () => {
        navigate("/cart");
    }

    const handleRedirectToCategory = () => {
        navigate("/categories")
    }

    return (
        <div>
            <div className="home-top-header">
                {/* <div className="logo-container">
                    <img
                        src="/logo-login.png"
                        alt="Lulu Rayyan Group"
                        className="logo"
                    />
                </div> */}
                <div className="home-search-container">
                    <img
                        src="/logo-login.png"
                        alt="Lulu Rayyan Group"
                        className="home-logo"
                    />
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="home-search-input"
                    />
                    <button className="home-search-button">
                        <i className="fas fa-search" />
                    </button>
                </div>
                <div className="home-user-actions">
                    {authToken ?
                        <span onClick={handleRedirectToProfile} className="home-action-item"><i className="fas fa-user" /> My Account</span>
                        : <span onClick={handleRedirectToLogin} className="home-action-item"><i className="fas fa-user" /> Login</span>
                    }

                    {authToken &&
                        <span onClick={handleRedirectToCart} className="home-action-item"><i className="fas fa-cart-shopping" /> Cart</span>
                    }
                </div>
            </div>

            <nav className="home-bottom-header">
                <div className="home-menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ?
                        <i className="fa-solid fa-xmark" />
                        : <i className="fa-solid fa-bars" />}
                </div>
                <ul className={`home-nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>HOME</li>
                    <li onClick={handleRedirectToCategory}>
                        CATEGORY 
                        {/* <i className="fas fa-chevron-down" /> */}
                    </li>
                    <li>SHOP BY BRANDS</li>
                    <li>BUYING GUIDE</li>
                    <li>BEST SELLING</li>
                    <li>
                        COMPANY 
                        {/* <i className="fas fa-chevron-down" /> */}
                    </li>
                    <li>CONTACT US</li>
                </ul>
            </nav>

        </div>
    );
}
