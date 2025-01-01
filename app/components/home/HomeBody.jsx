import "../../styles/components/home/HomeBody.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeBody() {

    const categories = [
        { title: "Tapes & Adhesives", image: "/product-cat1.jpg" },
        { title: "Abrasives", image: "/product-cat2.jpg" },
        { title: "Trolleys & Ladders", image: "/product-cat1.jpg" },
        { title: "Plumbing & Sanitary wares", image: "/product-cat2.jpg" },
        { title: "Safety & PPE", image: "/product-cat1.jpg" },
        { title: "Construction Materials", image: "/product-cat2.jpg" },
        // { title: "Safety & PPE", image: "/product-cat1.jpg" },
        // { title: "Construction Materials", image: "/product-cat2.jpg" },
    ];

    return (
        <div className="body-container">
            <div className="row content-container">
                <div className="col-8">
                    <Carousel
                        showThumbs={false}
                        showIndicators={true}
                        showStatus={false}
                        infiniteLoop
                        autoPlay
                        interval={5000}
                        // className="custom-carousel"
                        className="carousel-container">
                        <div className="image-container">
                            <img src="/carousel1.jpg" />
                            <p className="legend">Tools and accessories to the <br /><span className="desc-last-word"> construction </span></p>
                            <button className="shop-now-btn">Shop Now</button>
                        </div>
                        <div className="image-container">
                            <img src="/carousel2.png" />
                            <p className="legend">Tools and accessories to the <br /><span className="desc-last-word"> construction </span></p>
                            <button className="shop-now-btn">Shop Now</button>
                        </div>
                        {/* <div>
                            <img src="assets/3.jpeg" />
                            <p className="legend">Legend 3</p>
                        </div> */}
                    </Carousel>
                </div>
                <div className="col-4 offer-container">
                    <div className="cont-1">
                        <img src="/buying-1.png" alt="" className="blog-image" />

                        <div className="promo-content">
                            <h3>
                                BUYING <span className="highlight">GUIDE</span> <br />
                                Construction Blogs
                            </h3>
                        </div>

                    </div>
                    <div className="cont-1">
                        <img src="/img-right2.jpg" alt="" className="blog-image" />

                        <div className="savings-content">
                            <h5>
                                <span className="savings-highlight">BIG SAVINGS!!</span> <br />
                                Grab Our Exclusive Deals
                            </h5>
                            <button className="savings-shop-now-btn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row product-category-container">
                <div className="col product-category">
                    <img src="/product-cat1.jpg" alt="" className="product-category-img" />
                    <span className="product-category-label">Tapes & Adhesives</span>
                </div>
                <div className="col product-category">
                    <img src="/product-cat2.jpg" alt="" className="product-category-img" />
                    <span className="product-category-label">Tapes & Adhesives</span>
                </div>
            </div> */}

            <div className="categories-container">
                {categories.map((category, index) => (
                    <div className="category-card" key={index}>
                        <img src={category.image} alt={category.title} className="category-image" />
                        <div className="category-title">{category.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}