
import "./introduction.scss";
export default function Introduction() {
    return (
        <section className="introduction">
            <h2>SERVICES ARE BASED<br/>ON FULL-CYCLE<br/>OF CUSTOM<br/>SOFTWARE<br/>DEVELOPMENT</h2>
            <div className="types-and-button">
                <div className="types-of-works">
                    <div>Discovery <span>/</span> Definition <span>/</span></div>
                    <div>Design <span>&</span> Prototyping <span>/</span></div> 
                    <div>Development <span>&</span> Testing <span>/</span></div> 
                    <div>Quality Assurance <span>&</span> Delivery</div> 
                </div>
                <div className="button-block">
                    <div>free project estimation</div>
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    )
}