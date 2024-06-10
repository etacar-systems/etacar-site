import img1 from "../../../shared/assets/services-page/models/models-img-1.png";
import img2 from "../../../shared/assets/services-page/models/models-img-2.png";
import img3 from "../../../shared/assets/services-page/models/models-img-3.png";
import marker from "../../../shared/assets/services-page/models/Point.png";
import arrow from "../../../shared/assets/services-page/models/Arrow.png";
import "./models.scss"

export default function Models() {
    return (
        <section className="models">
            <h2>MODELS</h2>
            <div className="container">
                <div className="model">
                    <div className="description-and-button left">
                        <h3>Models of Co-operation: Custom Projects &&nbsp;Time-and-Materials</h3>
                        <div className="description">Engage a reliable and involved team with your project. Ourсaim is to develop long-term relationships as the go-to outsourcing partner in Belarus and smaller, fixed price tasks are a good way to start.</div>
                        <ul>
                            <li>Track progress at all stages of development</li>
                            <li>You can easily vary scope of work during the development and implementation</li>
                            <li>Firm project management and on-time delivery</li>
                            <li>Services are payable by the hour</li>
                        </ul>
                        <button>
                            Get estimation
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <img src={img1} alt="" />
                </div>

                <div className="model">
                    <img src={img2} alt="" />
                    <div className="description-and-button rigth">
                        <h3>Dedicated Team Model</h3>
                        <div className="description">We build professional, full-time dedicated teams in Belarus. We thoroughly analyze all of your requirements and assemble the best IT specialists to work exclusively on your particular projects.</div>
                        <ul>
                            <li>Our staff team is to work for you, as a part of your production, management, training and all other processes</li>
                            <li>Always motivated and well organized</li>
                            <li>Transparent budget and reporting</li>
                            <li>Competitive cost</li>
                        </ul>
                        <button>
                            Get estimation
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                </div>

                <div className="model">
                    <div className="description-and-button left">
                        <h3>IT Expert on Demand</h3>
                        <div className="description">We provide top-notch developers that will help you implement the best practices of product development. <br/><br/> Our professionals have a long history working with Agile development methodology on numerous projects, and they will share their real world experience with your dedicated team.</div>
                        <ul>
                            <li>Design product roadmap</li>
                            <li>Improve performance, stabilize architecture</li>
                            <li>Implement CI/CD</li>
                            <li>Conclude previous development team</li>
                        </ul>
                        <button>
                            Get estimation
                            <img src={arrow} alt="" />
                        </button>
                    </div>
                    <img src={img3} alt="" />
                </div>
            </div>
        </section>
    )
}