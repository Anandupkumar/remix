import "../../styles/components/home/HomeNavbar.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "@remix-run/react";

export default function HomeNavbar() {

    const navigate = useNavigate();

    const handleRedirectToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <div className="top-header">
                <div className="logo-container">
                    <img
                        src="/logo-login.png"
                        alt="Lulu Rayyan Group"
                        className="logo"
                    />
                    {/* <span className="sub-title">LULU RAYYAN GROUP W.L.L</span> */}
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="search-input"
                    />
                    <button className="search-button">
                        <i className="fas fa-search" />
                    </button>
                </div>
                <div className="user-actions">
                    <span onClick={handleRedirectToLogin} className="action-item"><i className="fas fa-user" /> Login</span>
                    <span className="action-item"><i className="fas fa-cart-shopping" /> Cart</span>
                </div>
            </div>
            <nav className="bottom-header">
                <ul className="nav-links">
                    <li>HOME</li>
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
