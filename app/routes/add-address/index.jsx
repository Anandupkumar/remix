// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/add-address.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";
import React from "react";
import {
    Outlet,
} from "@remix-run/react";
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


export default function AddAddress() {

    const [addAddress, setAddAddress] = useState(false);

    const handleAddAddress = () => {
        setAddAddress(true);
    }

    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>

            <div className="address-container">
                <h1>Add Address</h1>
                <form className="address-form">
                    <div className="form-row">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Phone No" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Pin code" />
                        <input type="text" placeholder="State" />
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="City" style={{ marginRight: "53%"}} />
                    </div>
                    <div className="form-row">
                        <textarea
                            placeholder="Provide house / Flat number, street details etc.."
                            rows="6" style={{ height: "120px"}}
                        ></textarea>
                    </div>
                    <div className="form-row">
                        <input type="text" placeholder="Landmark (Optional)" style={{ marginRight: "41%"}} />
                        <div className="address-type">
                            <button type="button" className="type-btn">
                                <i className="fa-solid fa-house"></i>
                            </button>
                            <button type="button" className="type-btn">
                                <i className="fa-solid fa-building"></i>
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="save-address-btn">
                        Save Address
                    </button>
                </form>
            </div>

            <div className="products-footer">
                <Footer />
            </div>
        </div>
    );
}
