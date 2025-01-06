// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/orders.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import React from "react";
import { Outlet, useNavigate } from "@remix-run/react";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Orders() {
  const navigate = useNavigate();

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
      deliveryDate: "12/05/2024",
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
      deliveryDate: "12/05/2024",
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
      deliveryDate: "12/05/2024",
    },
  ]);

  const handleViewOrder = () => {
    navigate("/order-view");
  };

  return (
    <div className="products-container">
      <div className="products-navbar">
        <Navbar />
      </div>

      <div className="address-container">
        <div className="address-head">
          <h2>My Orders</h2>
        </div>
        <div className="reviews-grid">
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item" onClick={handleViewOrder}>
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-size">{item.size}</p>
                <div className="item-rating">
                  {"★".repeat(item.rating)}
                  <span className="reviews">({item.reviews} Reviews)</span>
                </div>
                <p className="item-price">₹{item.price.toFixed(2)}</p>

                <span className="item-delivery">
                  Delivered on {item.deliveryDate}
                </span>
              </div>

              <div className="item-actions">
                <span>Qty: {item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="products-footer">
        <Footer />
      </div>
    </div>
  );
}
