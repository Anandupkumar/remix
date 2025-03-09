// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/my-account.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";
import {
    Outlet, useNavigate
} from "@remix-run/react";
import { getAddressData, deleteAddressData, setDefaultAddress } from "../../utils/api";
import { withSwal } from 'react-sweetalert2';
// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };


function MyAccount({ swal }) {

    const navigate = useNavigate();

    const [authToken, setAuthToken] = useState(false);

    // useEffect(() => {

    // }, []);


    const handleVewAddress = () => {
        navigate("/order-address");
    }

    const handleViewOrders = () => {
        navigate("/orders");
    }

    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>

            <div className="address-container">
                <div className="address-head">
                    <h2>My Account</h2>

                </div>
                <div className="main-head">
                    <div className="add-address" onClick={handleVewAddress}>
                        <span className="address-add-btn-cont" >
                            <i className="fa-solid fa-location-dot" />
                        </span>
                        <h3>
                            My Address
                        </h3>
                    </div>
                    <div className="add-address" onClick={handleViewOrders}>
                        <span className="address-add-btn-cont" >
                            <i className="fa-solid fa-cart-shopping" />
                        </span>
                        <h3>
                            My Orders
                        </h3>
                    </div>
                    <div className="add-address" >
                        <span className="address-add-btn-cont" >
                            <i className="fa-solid fa-heart" />
                        </span>
                        <h3>
                            Wishlist
                        </h3>
                    </div>
                </div>
            </div>

            <div className="products-footer">
                <Footer />
            </div>
        </div>
    );
}

export default withSwal(({ swal }) => <MyAccount swal={swal} />);