import "../../styles/components/home/SoldProducts.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from "react";
import { getHomeSectionProductList } from "../../utils/api";

export default function MostSoldProducts({ secId, title }) {

    const products = [
        {
            id: 1,
            image: "/cement.jpg",
            title: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            price: "Rs.460.00 per bag",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 2,
            image: "/angle-valve.jpg",
            title: "Angle Valve",
            description: "Brass",
            price: "Rs.298.00 set of 2",
            delivery: "Delivery Charge: ₹25",
            rating: 4.6,
        },
        {
            id: 3,
            image: "/cement.jpg",
            title: "Binding Wire",
            description: "0.71 mm",
            price: "Rs.599.00 91 meter",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 4,
            image: "/angle-valve.jpg",
            title: "Finolex Pipes 1”",
            description: "PVC Long Bends",
            price: "Rs.06.30 per piece",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 5,
            image: "/cement.jpg",
            title: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            price: "Rs.460.00 per bag",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 6,
            image: "/angle-valve.jpg",
            title: "Angle Valve",
            description: "Brass",
            price: "Rs.298.00 set of 2",
            delivery: "Delivery Charge: ₹25",
            rating: 4.6,
        },
        {
            id: 7,
            image: "/cement.jpg",
            title: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            price: "Rs.460.00 per bag",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 8,
            image: "/angle-valve.jpg",
            title: "Angle Valve",
            description: "Brass",
            price: "Rs.298.00 set of 2",
            delivery: "Delivery Charge: ₹25",
            rating: 4.6,
        },
        {
            id: 5,
            image: "/cement.jpg",
            title: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            price: "Rs.460.00 per bag",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 6,
            image: "/angle-valve.jpg",
            title: "Angle Valve",
            description: "Brass",
            price: "Rs.298.00 set of 2",
            delivery: "Delivery Charge: ₹25",
            rating: 4.6,
        },
        {
            id: 7,
            image: "/cement.jpg",
            title: "Raasi Gold PPC Cement",
            description: "50 KG Bag",
            price: "Rs.460.00 per bag",
            delivery: "Free Delivery",
            rating: 4.6,
        },
        {
            id: 8,
            image: "/angle-valve.jpg",
            title: "Angle Valve",
            description: "Brass",
            price: "Rs.298.00 set of 2",
            delivery: "Delivery Charge: ₹25",
            rating: 4.6,
        }
    ];

    const [homeSectionProducts, setHomeSectionProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const homeProducts = await getHomeSectionProductList(secId);
                if (homeProducts) {
                    // setShowSkeleton(false);
                    // console.log(homeProducts);

                    setHomeSectionProducts(homeProducts);
                } else {
                    // setShowSkeleton(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="most-sold-product-container">
            {
                title ? (<h1 className="products-heading">{title}

                </h1>) : null

            }

            <div className="home-products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <div className="product-info">
                            <div className="product-rating">
                                <span>⭐</span> {product.rating}
                            </div>
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-description">{product.description}</p>

                            <p
                                className={`product-delivery ${product.delivery.includes("Free") ? "free-delivery" : ""
                                    }`}
                            >
                                <i className="fas fa-truck" style={{ marginRight: '10px' }} />
                                {product.delivery}
                            </p>
                            <p className="product-price">{product.price}</p>

                            <button className="add-to-cart-btn">
                                <span className="cart-icon">🛒</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   