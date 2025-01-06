// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/order-address.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from "react";
import {
    Outlet, useNavigate
} from "@remix-run/react";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


export default function OrderAddress() {

    const navigate = useNavigate();

    const addresses = [
        {
            type: "Home",
            address: "Arun Kumar, Ashirvadh Ashokapuram,Kozhikode, Kerala,673303",
        },
        {
            type: "Office",
            address: "Arun Kumar, Ashirvadh Ashokapuram,Kozhikode, Kerala,673303",
        },

    ];

    const handleAddAddress = () => {
        navigate("/add-address");
    }

    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>

            <div className="address-container">
                <div className="address-head">
                    <h2>Address</h2>
                    <div className="add-address" onClick={handleAddAddress}>
                        <span className="address-add-btn-cont" >
                            <i className="fa-solid fa-plus add-address-btn" />
                        </span>
                        <h3>
                            Add Address
                        </h3>
                    </div>
                </div>
                <div className="reviews-grid">
                    {addresses.map((address, index) => (
                        <div key={index} className="review-card">
                            <div className="add-address-container">
                                <div className="select-address-head-container">
                                    <h3>
                                        {address.type}
                                    </h3>
                                    <div>
                                        <button className="edit-btn" >Edit</button>
                                        <button className="change-btn" >Delete</button>
                                    </div>
                                </div>
                                <hr className="select-address-line" />
                                <div className="select-address">
                                    <span className="address-select-btn-cont" >
                                        <i className="fa-solid fa-house add-address-btn" />
                                    </span>
                                    <p className="select-address-description">
                                        {address.address.split(", ").map((line, idx) => (
                                            <React.Fragment key={idx}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
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
