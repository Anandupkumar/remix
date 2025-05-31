import "../../styles/components/home/HomeNavbar.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { fetchSuggestions } from "../../utils/api";

export default function HomeNavbar() {

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const data = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Pineapple",
        "Grapes",
        "Avocado",
    ];

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
    };

    // const handleSearch = () => {
    //     if (searchValue.trim() !== "") {
    //         const filtered = data.filter(item =>
    //             item.toLowerCase().includes(searchValue.toLowerCase())
    //         );

    //         setSuggestions(filtered);
    //     } else {
    //         setSuggestions([]);
    //     }
    // };

    const handleInputChange = async (e) => {
        setSearchValue(e.target.value);
        // Trigger search live as you type
        const value = e.target.value;
        if (value.trim() !== "") {

            const suggRes = await fetchSuggestions(value);
            const filtered = suggRes.filter(item =>
                item.name.toLowerCase().includes(value.toLowerCase())
            );
            
            setSuggestions(filtered);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (value) => {
        setSearchValue(value.name || "");
        setSuggestions([]);
        navigate(`/view-products?id=${value.product_id}`); // Redirect to product view
        // Optionally trigger handleSearch() here
    };

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
                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="home-search-input"
                            value={searchValue}
                            onChange={handleInputChange}
                        />
                        <button className="home-search-button" onClick={() => { handleSuggestionClick(searchValue) }}>
                            <i className="fas fa-search" />
                        </button>

                        {suggestions.length > 0 && (
                            <ul className="suggestion-list">
                                {suggestions.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSuggestionClick(item)}
                                    >
                                        <img src={item?.image_paths && item.image_paths.length > 0 ? item.image_paths[0] : "/default-image.png"} alt={item?.name || ""} />
                                        {item?.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

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
