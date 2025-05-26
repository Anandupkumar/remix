import "../../styles/components/home/HomeBody.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect, useRef } from "react";
import { getTopSliderData, getCategoryCarousel } from "../../utils/api";
import {
    Outlet, useNavigate
} from "@remix-run/react";

export default function HomeBody() {

    const navigate = useNavigate();
    const scrollContainerRef = useRef(0);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Adjust scroll amount
            if (direction === "left") {
                scrollContainerRef.current.scrollLeft -= scrollAmount;
            } else {
                scrollContainerRef.current.scrollLeft += scrollAmount;
            }

            setShowLeftArrow(scrollContainerRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [topSliders, categoryCarousel] = await Promise.all([
                    getTopSliderData(),
                    getCategoryCarousel()
                ]);

                // console.log("Top Sliders:", topSliders);
                // console.log("Categories:", categoryCarousel);

                if (topSliders) setSliderImages(topSliders);
                if (categoryCarousel) setCategoryCarousel(categoryCarousel);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [sliderImages, setSliderImages] = useState([]);
    const [categoryCarousel, setCategoryCarousel] = useState([]);
    const [showLeftArrow, setShowLeftArrow] = useState(0);

    const categories = [
        { name: "Tapes & Adhesives", image_path: "/product-cat1.jpg" },
        { name: "Abrasives", image_path: "/product-cat2.jpg" },
        { name: "Trolleys & Ladders", image_path: "/product-cat1.jpg" },
        { name: "Plumbing & Sanitary wares", image_path: "/product-cat2.jpg" },
        { name: "Safety & PPE", image_path: "/product-cat1.jpg" },
        { name: "Construction Materials", image_path: "/product-cat2.jpg" },
        { name: "Safety & PPE", image_path: "/product-cat1.jpg" },
        { name: "Construction Materials", image_path: "/product-cat2.jpg" },
    ];

    // const handleRedirectToSubCategories = (category) => {
    //     navigate(`/sub-categories?id=${category.id}&name=${category.name}`);
    // }

    const handleRedirectToProductList = (category) => {
        navigate(`/product-list?subId=${category.id}`);
    }

    return (
        // <div className="body-container">
            <div className="content_wrap">
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

                            {sliderImages.map((slider, index) => (
                                <div className="image-container" key={index}>
                                    <img src={slider.image_path} />
                                    {/* <p className="legend">Tools and accessories to the <br /><span className="desc-last-word"> construction </span></p>
                                <button className="shop-now-btn">Shop Now</button> */}
                                </div>
                            ))}

                            {/* <div className="image-container"> */}
                            {/* <img src="/carousel1.jpg" /> */}
                            {/* <img src="https://mspotmicros.appcloudconsole.com/micros/uploads/images/elastic/wF88yhgk4emp6xSEEImzncwl7jyDBBeyuTFH5Skx.png" /> */}
                            {/* <p className="legend">Tools and accessories to the <br /><span className="desc-last-word"> construction </span></p>
                            <button className="shop-now-btn">Shop Now</button> */}
                            {/* </div>
                        <div className="image-container"> */}
                            {/* <img src="/carousel2.png" /> */}
                            {/* <img src="https://mspotmicros.appcloudconsole.com/micros/uploads/images/elastic/4lYwEfjZvLM1zHwAOBGzyitIHhWtUEpCXiFTkZnL.jpg" /> */}
                            {/* <p className="legend">Tools and accessories to the <br /><span className="desc-last-word"> construction </span></p>
                            <button className="shop-now-btn">Shop Now</button> */}
                            {/* </div> */}

                            {/* <div>
                            <img src="assets/3.jpeg" />
                            <p className="legend">Legend 3</p>
                        </div> */}
                        </Carousel>
                    </div>
                    <div className="col-4 offer-container">
                        <div className="cont-1">
                            <img src="/banner2.png" alt="" className="blog-image" />

                            {/* <div className="promo-content">
                            <h3>
                                BUYING <span className="highlight">GUIDE</span> <br />
                                Construction Blogs
                            </h3>
                        </div> */}

                        </div>
                        <div className="cont-1">
                            <img src="/banner3.png" alt="" className="blog-image" />

                            {/* <div className="savings-content">
                            <h5>
                                <span className="savings-highlight">BIG SAVINGS!!</span> <br />
                                Grab Our Exclusive Deals
                            </h5>
                            <button className="savings-shop-now-btn">Shop Now</button>
                        </div> */}
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

                <div className="categories-wrapper">
                    {showLeftArrow !== 0 && (
                        <button className="scroll-button left" onClick={() => scroll("left")}>&#10094;</button>
                    )}

                    <div className="home-categories-container" ref={scrollContainerRef}>
                        {/* {categories.map((category, index) => ( */}
                        {categoryCarousel.map((category, index) => (
                            <div className="home-category-card" key={index} onClick={() => handleRedirectToProductList(category)}>
                                <img src={category.image_path} alt={category.name} className="home-category-image" />
                                <div className="home-category-title">{category.name}</div>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll("right")}>&#10095;</button>
                </div>
            </div>
        // </div>
    )
}