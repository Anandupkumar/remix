import "../../styles/components/home/HomeAds.scss";


export default function HomeAds() {
    return (
        <div className="advertisement-container">
            <div className="row ad-content">
                <div className="col-6">
                    <span className="ad-label">AD</span>
                    <img src="/ad1.png" alt="ad1" />
                </div>
                <div className="col-6">
                    <img src="/ad2.png" alt="ad2" />
                </div>
            </div>
        </div>
    )
}