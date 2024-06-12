import book from "../../../../shared/assets/services-page/industries/Book.svg"
import cart from "../../../../shared/assets/services-page/industries/Cart.svg"
import enterprise from "../../../../shared/assets/services-page/industries/Enterprise.svg"
import home from "../../../../shared/assets/services-page/industries/Home.svg"
import "./industries.scss";

export default function Industries() {
    return (
        <section className="industries">
            <h2>INDUSTRIES</h2>
            <div className="container">
                <div className="filter left"></div>
                <div className="filter right"></div>
                <div className="container-industries">
                    <div className="industrie">
                        <div className="img education"></div>
                        <figure>
                            <img src={book} alt="" />
                            <figcaption>Education</figcaption>
                        </figure>
                    </div>
                    <div className="industrie">
                        <div className="img real-estate"></div>
                        <figure>
                            <img src={home} alt="" />
                            <figcaption>Real Estate</figcaption>
                        </figure>
                    </div>
                    <div className="industrie">
                        <div className="img enterprise-applications"></div>
                        <figure>
                            <img src={enterprise} alt="" />
                            <figcaption>Enterprise applications</figcaption>
                        </figure>
                    </div>
                    <div className="industrie">
                        <div className="img b2c"></div>
                        <figure>
                            <img src={cart} alt="" />
                            <figcaption>B2C & B2B eCommerce</figcaption>
                        </figure>
                    </div>
                    <div className="industrie">
                        <div className="img b2c"></div>
                        <figure>
                            <img src={cart} alt="" />
                            <figcaption>B2C & B2B eCommerce</figcaption>
                        </figure>
                    </div>
                </div>     
            </div>
        </section>
    )
}