import IndustriesAndReviews from "./Industries-and-Reviews/industries-and-reviews";
import Introduction from "./Introduction/introduction";
import Models from "./Models/models";
import Services from "./Services/secvices";

export default function ServicesPage() {
    return (
        <main>
            <Introduction/>
            <Services/>
            <Models/>
            <IndustriesAndReviews/>
        </main>
    )
}