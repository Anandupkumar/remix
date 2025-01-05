// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/cart.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import { Outlet, useNavigate } from "@remix-run/react";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


export default function Cart() {

    const navigate = useNavigate();

    const [showAddress, setShowAddress] = useState(false);
    const [buyButtonContent, setBuyButtonContent] = useState("BUY NOW");
    const [isDisabled, setIsDisabled] = useState(false);
    const [showSelectAddress, setShowSelectAddress] = useState(false);
    const [buttonStyle, setButtonStyle] = useState({});
    const [showPaymentMethod, setShowPaymentMethod] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Greenstone's AAC Brick",
            size: "600mmX200mmX100mm",
            price: 38,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/prod-list1.jpeg",
        },
        {
            id: 2,
            name: "Binding Wire",
            size: "91 Meter",
            price: 599,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/carousel1.jpg",
        },
        {
            id: 3,
            name: "Magic Acrylic Wall Putty",
            size: "20 Ltr",
            price: 1350,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/carousel2.png",
        },
    ]);

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleItemQty = (itemId, operation) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity:
                        operation === "plus"
                            ? item.quantity + 1
                            : item.quantity > 1
                                ? item.quantity - 1
                                : item.quantity,
                };
            }
            return item;
        });

        setCartItems(updatedCartItems);
    }

    const handleItemRemove = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
    }

    const handleAddAddress = () => {

        !showSelectAddress && setShowAddress(true);
        !showAddress && setIsDisabled(true);
        !showAddress && setButtonStyle({ backgroundColor: "#7a9cbd", });

        if (showAddress && !showSelectAddress) {
            setBuyButtonContent("BUY NOW");
        } else {

            if (showAddress && showSelectAddress && buyButtonContent !== 'PROCEED') {
                setShowPaymentMethod(true);
                setBuyButtonContent("PROCEED");
            } else if (showAddress && showSelectAddress && buyButtonContent === 'PROCEED') {
                setOrderPlaced(true);
            } else {
                setBuyButtonContent("MAKE PAYMENT");
            }
        }
    }

    const handleAddressAdd = () => {
        setShowSelectAddress(true);
        setIsDisabled(false);
        setButtonStyle({});
        setIsDisabled(false);
    }

    const handleRedirectToProducts = () => {
        navigate("/products");
    }

    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>
            <div className="cart-content-container">
                {!orderPlaced ? (
                    <div className="cart-container">
                        <div className="cart-items">
                            <h2>Cart</h2>
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-size">{item.size}</p>
                                        <div className="item-rating">
                                            {"★".repeat(item.rating)}
                                            <span className="reviews">({item.reviews} Reviews)</span>
                                        </div>
                                        <p className="item-price">₹{item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-actions">

                                        {!showAddress ? (
                                            <>
                                                <button className="remove-btn" onClick={() => handleItemRemove(item.id)}>Remove</button>
                                                <div className="quantity-control">
                                                    <i className="fa-solid fa-plus quantity-btn" onClick={() => handleItemQty(item.id, "plus")} />
                                                    <span className="quantity">{item.quantity}</span>
                                                    <i className="fa-solid fa-minus quantity-btn" onClick={() => handleItemQty(item.id, "minus")} />
                                                </div>
                                            </>
                                        ) : (
                                            <span>
                                                Qty: {item.quantity}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="price-details">

                            {showAddress && !showSelectAddress && (
                                <div className="add-address-container">
                                    <div className="add-address">
                                        <span className="address-add-btn-cont" onClick={handleAddressAdd}>
                                            <i className="fa-solid fa-plus add-address-btn" />
                                        </span>
                                        <h3 className="add-address-head">Add Address</h3>
                                    </div>
                                    <p className="add-address-description">Please provide your complete delivery address to ensure timely and accurate delivery.</p>
                                </div>
                            )}

                            {showSelectAddress && !showPaymentMethod && (
                                <div className="add-address-container">
                                    <div className="select-address-head-container">
                                        <h3>
                                            Delivery To
                                        </h3>
                                        <button className="change-btn" >Change</button>
                                    </div>
                                    <hr className="select-address-line" />
                                    <div className="select-address">
                                        <span className="address-select-btn-cont" >
                                            <i className="fa-solid fa-house add-address-btn" />
                                        </span>
                                        <p className="select-address-description">Arun Kumar <br />
                                            Ashirvadh, Ashokapuram, Kozhikode, <br />
                                            Kerala, 673303.</p>
                                    </div>

                                </div>
                            )}

                            {showPaymentMethod && (
                                <div className="add-address-container">
                                    <div className="select-address-head-container">
                                        <h3>
                                            Available payment methods
                                        </h3>
                                    </div>
                                    <hr className="select-address-line" />
                                    <div className="select-payment">
                                        <div className="payment-method" style={{ height: "65%" }}>
                                            <p className="select-payment-description">Cash on delivery</p>
                                            <img src="/payment-cash.png" alt="payment-cash" className="payment-img" />
                                        </div>
                                        <div className="payment-method">
                                            <p className="select-payment-description">UPI</p>
                                            <img src="/payment-upi.png" alt="payment-upi" className="payment-img" />
                                        </div>
                                        <div className="payment-method">
                                            <p className="select-payment-description">Debit/Credit Card</p>
                                            <img src="/payment-card.png" alt="payment-card" className="payment-img" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <h3>Price Details</h3>
                            <div className="price-item-container">
                                <div className="price-item">
                                    <span>{totalItems} items</span>
                                    <span>₹{totalAmount - 899}</span>
                                </div>
                                <div className="price-item">
                                    <span>Delivery Charge</span>
                                    <span>₹899</span>
                                </div>
                            </div>
                            <div className="price-total">
                                <span>Total Amount</span>
                                <span>₹{totalAmount}</span>
                            </div>
                            <button className="buy-now-btn" disabled={isDisabled} style={buttonStyle} onClick={handleAddAddress}>{buyButtonContent}</button>
                        </div>
                    </div>
                ) : (
                    <div className="order-placed">
                        <h2 className="order-placed-head">Order Placed Successfully <img className="order-placed-head-img" src="/orderplaced.png" alt="" /></h2>
                        <img className="order-placed-img" src="/ordered.png" alt="" />
                        <p className="order-placed-text">Your delivery is on its way and will be arriving soon!</p>
                        <button onClick={handleRedirectToProducts} className="order-placed-btn" >BACK TO SHOPPING</button>
                    </div>
                )}
            </div>
            {/* <Outlet /> */}
            <div className="products-footer">
                <Footer />
            </div>
        </div>
    );
}
