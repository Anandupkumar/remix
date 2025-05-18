import "../styles/components/Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="foot-logo-container">
                <img src="/footer-logo.png" alt="Lulu Rayyan Group" className="foot-footer-logo" />
            </div>
            <div className="footer-container">

                <div className="footer-brand">

                    <p className="footer-description">
                        A trusted leader in the construction industry, providing high-quality materials, innovative solutions, and exceptional service. From residential to commercial projects, we are committed to building excellence and supporting your vision every step of the way.
                    </p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Shop by Category</h4>
                        <ul>
                            <li>Abrasives</li>
                            <li>Paint Tools & Accessories</li>
                            <li>Trolleys & Ladders</li>
                            <li>Safety & PPE</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <ul>
                            <li>Shipping & Delivery</li>
                            <li>Returns & Exchanges</li>
                            <li>Contact Us</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h4>About LRG</h4>
                        <ul>
                            <li>Our Story</li>
                            <li>Sustainability</li>
                            <li>Press & Media</li>
                            <li>Blog</li>
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
