import "../styles/components/Navbar.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "@remix-run/react";

export default function Navbar() {

    const navigate = useNavigate();

    // const handleRedirectToLogin = () => {
    //     navigate("/login");
    // }

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
                <ul className="nav-links">
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
