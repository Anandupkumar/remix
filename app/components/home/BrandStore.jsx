import "../../styles/components/home/BrandStore.scss";

export default function BrandStore() {
    const brands = [
        {
            id: 1,
            logo: "/brand1.png",
            name: "UltraTech Cement",
            linkText: "Visit Store",
        },
        {
            id: 2,
            logo: "/brand2.png",
            name: "Cemex",
            linkText: "Visit Store",
        },
        {
            id: 3,
            logo: "/brand3.png",
            name: "Heidelberg Materials",
            linkText: "Visit Store",
        },
        {
            id: 4,
            logo: "/brand1.png",
            name: "LafargeHolcim",
            linkText: "Visit Store",
        },
        {
            id: 5,
            logo: "/brand2.png",
            name: "Anhui Conch Cement",
            linkText: "Visit Store",
        },
        {
            id: 6,
            logo: "/brand3.png",
            name: "Vulcan Materials Company",
            linkText: "Visit Store",
        },
    ];

    return (
        <div className="brands-container">
            <h1 className="brands-heading">EXPLORE OFFICIAL BRAND STORES</h1>
            <div className="brands-grid">
                {brands.slice(0, 3).map((brand) => (
                    <div key={brand.id} className="brand-card">
                        <div className="brand-logo">
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                        <div className="brand-details">
                            <h2 className="brand-name">{brand.name.toUpperCase()}</h2>
                            <a href="#" className="brand-link">
                                {brand.linkText} &gt;
                            </a>
                        </div>
                    </div>
                ))}
                {brands.slice(3, 6).map((brand) => (
                    <div key={brand.id} className="brand-card">
                        <div className="brand-logo">
                            <img src={brand.logo} alt={brand.name} />
                        </div>
                        <div className="brand-details">
                            <h2 className="brand-name">{brand.name.toUpperCase()}</h2>
                            <a href="#" className="brand-link">
                                {brand.linkText} &gt;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}