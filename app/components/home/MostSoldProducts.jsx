import "../../styles/components/home/SoldProducts.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect, useRef } from "react";
import { getHomeSectionProductList } from "../../utils/api";
import {
    Outlet, useNavigate
} from "@remix-run/react";

export default function MostSoldProducts({ secId, title }) {

    const navigate = useNavigate();
    const scrollContainerRefs = useRef([]);

    const [showLeftArrows, setShowLeftArrows] = useState([]);

    const scroll = (rowIndex, direction) => {
        const ref = scrollContainerRefs.current[rowIndex];
        if (ref) {
            const scrollAmount = 300;
            if (direction === "left") {
                ref.scrollLeft -= scrollAmount;
            } else {
                ref.scrollLeft += scrollAmount;
            }
            updateShowLeftArrow(rowIndex, ref.scrollLeft);
        }
    };

    const [homeSectionProducts, setHomeSectionProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const homeProducts = await getHomeSectionProductList(secId);
                if (homeProducts?.featured_item) {
                    setHomeSectionProducts(homeProducts.featured_item);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    // Split products into rows of 12
    const rows = [];
    for (let i = 0; i < homeSectionProducts.length; i += 12) {
        rows.push(homeSectionProducts.slice(i, i + 12));
    }

    // Initialize showLeftArrows for each row
    useEffect(() => {
        setShowLeftArrows(Array(rows.length).fill(0));
    }, [rows.length]);

    const updateShowLeftArrow = (rowIndex, scrollLeft) => {
        setShowLeftArrows(prev => {
            const updated = [...prev];
            updated[rowIndex] = scrollLeft;
            return updated;
        });
    };

    const handleScroll = (rowIndex) => {
        const ref = scrollContainerRefs.current[rowIndex];
        if (ref) {
            updateShowLeftArrow(rowIndex, ref.scrollLeft);
        }
    };

    const handleRedirectToView = (product) => {
        navigate(`/view-products?id=${product.product_id}`);
    };

    return (
        <div className="most-sold-product-container">
            {title ? (<h1 className="products-heading">{title}</h1>) : null}

            {rows.map((row, rowIndex) => (
                <div className="home-products-wrapper" key={rowIndex}>
                    {showLeftArrows[rowIndex] !== 0 && (
                        <button className="scroll-button left" onClick={() => scroll(rowIndex, "left")}>&#10094;</button>
                    )}

                    <div
                        className="home-products-new-container"
                        ref={el => scrollContainerRefs.current[rowIndex] = el}
                        onScroll={() => handleScroll(rowIndex)}
                    >
                        {row.map((category, index) => (
                            <div className="most-product-card" key={index} onClick={() => handleRedirectToView(category)}>
                                <img
                                    src={category.image_paths}
                                    alt={category.name}
                                    className="most-product-image"
                                />
                                <div className="most-product-info">
                                    <div className="most-product-rating">
                                        <span>⭐</span> {category.star_value}
                                    </div>
                                    <h3 className="most-product-title" title={category.name}>{category.name}</h3>
                                    <p
                                        className={`most-product-delivery ${category.freedelivery_available.includes("0") ? "free-delivery" : ""}`}
                                    >
                                        <i className="fas fa-truck" style={{ marginRight: '10px' }} />
                                        {category.freedelivery_available === "0" ? "Free Delivery" : ""}
                                    </p>
                                    <p className="most-product-price">₹{category.selling_price}.00</p>
                                    <button className="most-add-to-cart-btn">
                                        <span className="most-cart-icon">🛒</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll(rowIndex, "right")}>&#10095;</button>
                </div>
            ))}
        </div>
    )
}   
