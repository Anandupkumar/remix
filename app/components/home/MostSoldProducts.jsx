import "../../styles/components/home/SoldProducts.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { getHomeSectionProductList } from "../../utils/api";
import {
    Outlet, useNavigate
} from "@remix-run/react";

export default function MostSoldProducts({ secId, title }) {

    const navigate = useNavigate();

    const products = [
        {
            product_id: 1,
            image_paths: "/cement.jpg",
            name: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            selling_price: "Rs.460.00 per bag",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 2,
            image_paths: "/angle-valve.jpg",
            name: "Angle Valve",
            description: "Brass",
            selling_price: "Rs.298.00 set of 2",
            freedelivery_available: "Delivery Charge: ₹25",
            star_value: 4.6,
        },
        {
            product_id: 3,
            image_paths: "/cement.jpg",
            name: "Binding Wire",
            description: "0.71 mm",
            selling_price: "Rs.599.00 91 meter",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 4,
            image_paths: "/angle-valve.jpg",
            name: "Finolex Pipes 1”",
            description: "PVC Long Bends",
            selling_price: "Rs.06.30 per piece",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 5,
            image_paths: "/cement.jpg",
            name: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            selling_price: "Rs.460.00 per bag",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 6,
            image_paths: "/angle-valve.jpg",
            name: "Angle Valve",
            description: "Brass",
            selling_price: "Rs.298.00 set of 2",
            freedelivery_available: "Delivery Charge: ₹25",
            star_value: 4.6,
        },
        {
            product_id: 7,
            image_paths: "/cement.jpg",
            name: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            selling_price: "Rs.460.00 per bag",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 8,
            image_paths: "/angle-valve.jpg",
            name: "Angle Valve",
            description: "Brass",
            selling_price: "Rs.298.00 set of 2",
            freedelivery_available: "Delivery Charge: ₹25",
            star_value: 4.6,
        },
        {
            product_id: 5,
            image_paths: "/cement.jpg",
            name: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            selling_price: "Rs.460.00 per bag",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 6,
            image_paths: "/angle-valve.jpg",
            name: "Angle Valve",
            description: "Brass",
            selling_price: "Rs.298.00 set of 2",
            freedelivery_available: "Delivery Charge: ₹25",
            star_value: 4.6,
        },
        {
            product_id: 7,
            image_paths: "/cement.jpg",
            name: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            selling_price: "Rs.460.00 per bag",
            freedelivery_available: "0",
            star_value: 4.6,
        },
        {
            product_id: 8,
            image_paths: "/angle-valve.jpg",
            name: "Angle Valve",
            description: "Brass",
            selling_price: "Rs.298.00 set of 2",
            freedelivery_available: "Delivery Charge: ₹25",
            star_value: 4.6,
        }
    ];

    const [homeSectionProducts, setHomeSectionProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const homeProducts = await getHomeSectionProductList(secId);
                if (homeProducts?.featured_item) {
                    // setShowSkeleton(false);
                    // console.log("homeProducts", homeProducts);

                    setHomeSectionProducts(homeProducts.featured_item);
                } else {
                    // setShowSkeleton(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleRedirectToView = (product) => {
        navigate(`/view-products?id=${product.product_id}`);
    }

    return (
        <div className="most-sold-product-container">
            {
                title ? (<h1 className="products-heading">{title}

                </h1>) : null

            }

            <div className="home-products-grid">
                {homeSectionProducts.map((product) => (
                    <div key={product.product_id} className="most-product-card" onClick={() => handleRedirectToView(product)}>
                        <img
                            src={product.image_paths}
                            alt={product.name}
                            className="most-product-image"
                        />
                        <div className="most-product-info">
                            <div className="most-product-rating">
                                <span>⭐</span> {product.star_value}
                            </div>
                            <h3 className="most-product-title">{product.name}</h3>
                            {/* <p className="product-description">{product.description}</p> */}
                            {/* <p dangerouslySetInnerHTML={{ __html: product.description }} /> */}

                            <p
                                className={`most-product-delivery ${product.freedelivery_available.includes("0") ? "free-delivery" : ""
                                    }`}
                            >
                                <i className="fas fa-truck" style={{ marginRight: '10px' }} />
                                {product.freedelivery_available === "0" ? "Free Delivery" : ""}
                            </p>
                            <p className="most-product-price">₹{product.selling_price}.00</p>
                            
                            <button className="most-add-to-cart-btn">
                                <span className="most-cart-icon">🛒</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   