// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/order-address.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
    Outlet,
} from "@remix-run/react";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


export default function OrderAddress() {

    const cartItems = [
        {
            id: 1,
            name: "Greenstone's AAC Brick",
            size: "600mmX200mmX100mm",
            price: 38,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/prod-list1.jpeg", // Replace with actual image path
        },
        {
            id: 2,
            name: "Binding Wire",
            size: "91 Meter",
            price: 599,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/carousel1.jpg", // Replace with actual image path
        },
        {
            id: 3,
            name: "Magic Acrylic Wall Putty",
            size: "20 Ltr",
            price: 1350,
            reviews: 18,
            rating: 5,
            quantity: 1,
            image: "/carousel2.png", // Replace with actual image path
        },
    ];

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>
            <div className="cart-content-container">

                <div className="cart-container">
                    <div className="cart-items">
                        <h2>Order Bill</h2>
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
                                    <span>
                                        Qty: {item.quantity}
                                    </span>
                                    {/* <button className="remove-btn">Remove</button>
                                    <div className="quantity-control">
                                        <i className="fa-solid fa-plus quantity-btn" />
                                        <span className="quantity">{item.quantity}</span>
                                        <i className="fa-solid fa-minus quantity-btn" />
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="price-details">
                        <h3>Price Details</h3>
                        <div className="price-item-container">
                            <div className="price-item">
                                <span>{totalItems} items</span>
                                <span>₹{totalAmount - 899}</span>
                            </div>
                            <div className="price-item">
                                <span>Delivery Charge</span>
                                <span>₹0</span>
                            </div>
                        </div>
                        <div className="price-total">
                            <span>Total Amount</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <button className="buy-now-btn">BUY NOW</button>
                    </div>
                </div>

            </div>
            {/* <Outlet /> */}
            <div className="products-footer">
                <Footer />
            </div>
        </div>
    );
}
