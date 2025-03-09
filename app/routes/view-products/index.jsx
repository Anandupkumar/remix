// import type { MetaFunction } from "@remix-run/node";
// import "../styles/home.scss";
import "../../styles/view-products.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";


export default function ProductsView() {

    const [viewImage, setViewImage] = useState(0);

    const handleImageView = (i) => {
        // console.log(i);

        setViewImage(i);
    }

    const product = {
        name: "Greenstone's AAC Brick",
        dimensions: "600mmX200mmX100mm",
        price: 38,
        description:
            "Being Light Weight AAC Blocks provides excellent resistance to earthquake forces. Long Lasting AAC Blocks are strong to water damage as compared to other construction materials. They can even withstand in any climatic conditions, this in turn gives you increased value for your investment. Environment Friendly Energy consumed in the production process of AAC is only a fraction compared to the production of other Building material. The Manufacturing process emits no pollutants and creates no by-products or toxic natural raw material. The finished product is thrice the volume of the raw material used, making it extremely resource-efficient and environment friendly. Workability Extremely Light : AAC is upto 3-4 times lighter than traditional concrete, representing great advantages in transportation and material handling.",
        reviews: 18,
        rating: 5,
        images: [
            "/prod-list1.jpeg",
            "/carousel1.jpg",
            "/carousel2.png",
            // "/images/product4.png",
        ],
    };

    const reviews = [
        {
            name: "Emily W",
            text: "Excellent quality! These AAC bricks are lightweight yet strong, making construction faster and easier. Highly recommended!",
            rating: 5,
        },
        {
            name: "James R",
            text: "Great thermal insulation and durability. Greenstone's AAC bricks helped reduce my energy bills and provide a solid structure.",
            rating: 4,
        },
        {
            name: "Olivia T.",
            text: "Perfect for my eco-friendly project. Very satisfied with the results!",
            rating: 4,
        },
        {
            name: "Sophia M",
            text: "I was impressed with how easy these bricks were to handle. Lightweight, strong, and provide great soundproofing.",
            rating: 5,
        },
    ];


    return (
        <div className="products-container">
            <div className="products-navbar">
                <Navbar />
            </div>

            <div className="product-details">
                <div className="image-gallery ">
                    <img src={product.images[viewImage]} alt={product.name} className="main-image" />
                    <div className="thumbnail-container">
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Thumbnail ${index + 1}`} className="thumbnail" onClick={() => handleImageView(index)} />
                        ))}
                    </div>
                </div>

                <div className="product-info ">
                    <h1 className="product-title">{product.name}</h1>
                    <p className="product-dimensions">{product.dimensions}</p>

                    <div className="rating-reviews">
                        <div className="rating">
                            {Array(product.rating)
                                .fill()
                                .map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                        </div>
                        <p className="reviews">({product.reviews} Reviews)</p>
                    </div>

                    <div className="price-quantity-container">
                        <p className="price">₹{product.price}.00</p>
                        <div className="quantity-selector">
                            <button className="quantity-btn">-</button>
                            <span className="quantity-value">1</span>
                            <button className="quantity-btn">+</button>
                        </div>

                    </div>

                    <div className="description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>

                    <button className="add-to-cart-btn">ADD TO CART
                        <i className="fa-solid fa-cart-shopping" style={{ marginLeft: "5px" }} />
                    </button>
                </div>
            </div>

            <div className="reviews-section">
                <h2 className="reviews-title">REVIEWS</h2>
                <p className="reviews-subtitle">
                    See what our customers are saying. Explore real experiences and find out why our materials are loved by so many.
                </p>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <h3 className="review-name">{review.name}</h3>
                            <p className="review-text">{review.text}</p>
                            <div className="review-rating">
                                {Array(review.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                {Array(5 - review.rating)
                                    .fill()
                                    .map((_, i) => (
                                        <span key={i} className="star empty">★</span>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="view-all-btn">View All</button>
            </div>

            <div className="products-footer">
                <Footer />
            </div>
        </div>
    );
}
