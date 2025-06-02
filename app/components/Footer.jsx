import "../styles/components/Footer.scss";
import { useNavigate } from "@remix-run/react";
import { useState, useEffect } from "react";
import { fetchFooterData } from "../utils/api.js";

export default function Footer() {

    const navigate = useNavigate();
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    // const [searchValue, setSearchValue] = useState("");
    const [footerData, setFooterData] = useState([
        // {
        //     section1: [
        //         {
        //             image: "https://ecommerceservice.appcloudconsole.com/LRG/micros/uploads/images/elastic/SpOb5v1hHphK5oTEBz3BmISikIXyIF6SX4e0UEY0.png",
        //             description: "A trusted leader in the construction industry, providing high-quality materials, innovative solutions, and exceptional service. From residential to commercial projects, we are committed to building excellence and supporting your vision",
        //             sort_order_section1: "1"
        //         }
        //     ]
        // },
        // {
        //     section2: [
        //         {
        //             title1: "Power Tools",
        //             link1: "https://remix-1e9.pages.dev/product-list?subId=11"
        //         },
        //         {
        //             title1: "Trolleys &  Ladders",
        //             link1: "https://remix-1e9.pages.dev/product-list?subId=3"
        //         },
        //         {
        //             title1: "Abrasives",
        //             link1: "https://remix-1e9.pages.dev/product-list?subId=2"
        //         },
        //         {
        //             title1: "Tapes & Adhesives",
        //             link1: "https://remix-1e9.pages.dev/product-list?subId=1"
        //         }
        //     ]
        // },
        // {
        //     section3: [
        //         {
        //             title2: "Terms and conditions",
        //             link2: "https://remix-1e9.pages.dev/product-list?subId=1"
        //         },
        //         {
        //             title2: "Returns and cancellations",
        //             link2: "returns.html"
        //         },
        //         {
        //             title2: "Shipping and Delivery",
        //             link2: "delivery.html"
        //         },
        //         {
        //             title2: "FAQ",
        //             link2: "faq.html"
        //         }
        //     ]
        // },
        // {
        //     section4: [
        //         {
        //             title3: "offline stores",
        //             link3: "https://remix-1e9.pages.dev/"
        //         },
        //         {
        //             title3: "Legal",
        //             link3: "https://remix-1e9.pages.dev/"
        //         },
        //         {
        //             title3: "Used Stocks",
        //             link3: "https://remix-1e9.pages.dev/"
        //         },
        //         {
        //             title3: "Events",
        //             link3: "https://remix-1e9.pages.dev/"
        //         }
        //     ]
        // }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            const isVerified = localStorage.getItem("authToken");
            if (isVerified && isVerified !== "") {
                setAuthToken(true);
            } else {
                setAuthToken(false);
            }

            const footerRes = await fetchFooterData();
            if (footerRes) {
                setFooterData(footerRes);
            }
        };
        fetchData();
    }, []);


    return (
        <footer className="footer">
            <div className="foot-logo-container">
                <img src={footerData[0]?.section1[0]?.image || "/footer-logo.png"} alt="Lulu Rayyan Group" className="foot-footer-logo" />
            </div>
            <div className="footer-container">
                <div className="footer-brand">
                    <p className="footer-description">
                        {footerData[0]?.section1[0]?.description}
                    </p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Shop by Category</h4>
                        <ul>
                            {footerData[1]?.section2.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link1} target="_blank" rel="noopener noreferrer">{item.title1}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <ul>
                            {footerData[2]?.section3.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link2} target="_blank" rel="noopener noreferrer">{item.title2}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4>About LRG</h4>
                        <ul>
                            {footerData[3]?.section4.map((item, idx) => (
                                <li key={idx}>
                                    <a href={item.link3} target="_blank" rel="noopener noreferrer">{item.title3}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <span>|</span>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div className="footer-social">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
}
