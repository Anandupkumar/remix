import type { MetaFunction } from "@remix-run/node";
import React, { useState, useEffect } from "react";
// import "../../styles/home.scss";
import HomeNavbar from "../components/home/HomeNavbar";
import HomeBody from "../components/home/HomeBody"
import HomeSales from "../components/home/HomeSales";
import MostSoldProducts from "../components/home/MostSoldProducts";
import HomeAds from "../components/home/HomeAds";
import HomeRecomment from "../components/home/HomeRecomment";
import HomeSavings from "../components/home/HomeSavings";
import BrandStore from "../components/home/BrandStore";
import HomeBodyG from "../components/home/HomeBodyG";
import Footer from "../components/Footer";
import { getHomeSectionList } from "../utils/api";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const [homeSectionList, setHomeSectionList] = useState([]);

  const homeDataList = [
    {
      id: "4",
      title: "Most Sold Products",
      order_no: "1",
      status: "active",
      created_at: "2025-05-16 17:52:58",
      updated_at: "2025-05-17 10:30:00"
    },
    {
      id: "5",
      title: "Hot Selling",
      order_no: "2",
      status: "active",
      created_at: "2025-05-17 10:30:39",
      updated_at: "2025-05-17 10:30:56"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      // setShowSkeleton(true);
      try {
        const sectionList = await getHomeSectionList();
        if (sectionList) {
          // setShowSkeleton(false);
          // console.log(sectionList);

          setHomeSectionList(sectionList);
        } else {
          // setShowSkeleton(false);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
        // setShowSkeleton(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="home-header-container">
        <HomeNavbar />
      </div>

      <div className="body-container">
        <HomeBody />
        {/* <HomeBodyG /> */}
      </div>

      <div className="sales-container">
        <HomeSales />
      </div>

      {/* <div className="sold-product-container">
        <MostSoldProducts title={"OUR MOST SOLD PRODUCTS"} />
      </div> */}

      {homeDataList.map((section, index) => (
        <React.Fragment key={section.id}>
          {index === 1 && (
            <div className="ad-container">
              <HomeAds />
            </div>
          )}
          <div className="sold-product-container">
            <MostSoldProducts secId={section.id} title={section?.title.toUpperCase()} />
          </div>
        </React.Fragment>
      ))}


      {/* <div className="recom-container">
        <HomeRecomment />
      </div > */}

      {/* <div className="savings-container">
        <HomeSavings />
      </div > */}

      {/* <div className="sold-product-container">
        <MostSoldProducts title={null} />
      </div> */}

      <div className="brand-container">
        <BrandStore />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}
