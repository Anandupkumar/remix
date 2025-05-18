import "../../styles/components/home/HomeSales.scss";
import { useState, useEffect } from "react";
import { getMegaSalesBanners, getLimitedSalesData } from "../../utils/api";


export default function HomeSales() {

    const [megaSalesData, setMegaSalesData] = useState([]);
    const [limitedSalesData, setLimitedSalesData] = useState([]);

    const megaSalesItems = [
        { title: "New Arrivals", description: "Fresh Selections Just For You!", image: "/product-cat1.jpg" },
        { title: "Best Sellers", description: "Fresh Selections Just For You!", image: "/product-cat2.jpg" },
        { title: "Featured Picks", description: "Fresh Selections Just For You!", image: "/product-cat1.jpg" },
        { title: "Must-Haves", description: "Fresh Selections Just For You!", image: "/product-cat2.jpg" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const salesData = await getMegaSalesBanners();

                const [salesData, limitedData] = await Promise.all([
                    getMegaSalesBanners(),
                    getLimitedSalesData()
                ]);

                if (salesData) setMegaSalesData(salesData);
                if (limitedData) setLimitedSalesData(limitedData);

                console.log("limitedData : ", salesData);

                // } else {
                //     console.log("no mega sales data");
                // }

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const goToURL = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    }


    return (
        <div className="home-container">
            {/* Mega Sales Section */}
            <section className="mega-sales">
                <h2>Mega Sales</h2>
                <div className="row mega-sales-grid">
                    {megaSalesData.slice(0, 2).map((item, index) => (
                        <div key={index} className="card" onClick={() => goToURL(item.url)}>
                            <img src={item.image} alt={item.title} className="card-image" />

                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row mega-sales-grid">
                    {megaSalesData.slice(2, 4).map((item, index) => (
                        <div key={index} className="card" onClick={() => goToURL(item.url)}>
                            <img src={item.image} alt={item.title} className="card-image" />

                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Offer Sales Section */}
            <section className="offer-sales">
                {/* <h2>Offer Sales</h2> */}
                <div className="offer-banner">
                    {/* <img src="/offer-sales.png" alt="Offer Sale" /> */}
                    {limitedSalesData.length > 0 && (
                        <img src={limitedSalesData[0].image} alt="Offer Sale" />
                    )}
                </div>
            </section>
        </div>
    )
}