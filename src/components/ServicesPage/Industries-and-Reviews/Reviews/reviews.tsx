import arrow from "../../../../shared/assets/services-page/reviews/Arrow.svg"
import arrowNoActive from "../../../../shared/assets/services-page/reviews/Arrow-no-active.svg"
import "./reviews.scss";

export default function Reviews() {
    return (
        <section className="reviews">
            <h2>REVIEW</h2>
            <div className="container">
                <div className="into">
                    <div className="title">What our partners say</div>
                    <div className="arrows">
                        <img src={arrowNoActive} alt="back arrow" className="arrow no-active" />
                        <img src={arrow} alt="forward arrow" className="arrow" />
                    </div>
                </div>
                <div className="container-reviews">
                    <div className="review">
                        <div className="info">
                            <div className="photo"></div>
                            <div className="name-and-other-data">
                                <div className="name">Michael Fordyce</div>
                                <div className="other-data">CEO @NinthDecimal</div>
                            </div>
                        </div>
                        <div className="content">
                            Working with EtaCar Systems has been an amazing experience and has allowed my company to stabilize our core product. Our work with EtaCar Systems is based on a strong partnership, far more valuable than a traditional offshore development relationship. Their work is of an exceptionally high standard and the whole team regularly goes the extra mile to support our business.
                        </div>
                    </div>

                    <div className="review">
                        <div className="info">
                            <div className="photo"></div>
                            <div className="name-and-other-data">
                                <div className="name">David Stark</div>
                                <div className="other-data">CEO/CTO @Infuse.us</div>
                            </div>
                        </div>
                        <div className="content">
                            The thorough, conscientious, and detail-oriented approach of the EtaCar team allowed us to build and maintain long-term relationships with our commercial clients. Infuse benefits from our partnership with EtaCar Systems.
                        </div>
                    </div>

                    <div className="review">
                        <div className="info">
                            <div className="photo"></div>
                            <div className="name-and-other-data">
                                <div className="name">Matthew De Marte</div>
                                <div className="other-data">CEO @Vaulted Baseball</div>
                            </div>
                        </div>
                        <div className="content">
                            EtaCar Systems significantly propelled our project forward, and we are delighted to wholeheartedly recommend them for any web application development work. Their expertise, dedication, and innovative solutions were instrumental in achieving our project goals. Working with EtaCar Systems was a positive and productive experience, and we are confident in their ability to deliver exceptional results for any web development endeavor.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}