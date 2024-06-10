
import "./industries-and-reviews.scss";
import Industries from "./Industries/industries";
import Reviews from "./Reviews/reviews";

export default function IndustriesAndReviews() {
    return (
        <div className="industries-and-reviews">
            <Industries/>
            <Reviews/>
        </div>
    )
}