import '../../shared/styles/_all.scss';
import {PointIcon} from "../../shared/ui/icons";


const missionItems = [
    "Customer is number one",
    "Customer satisfaction and our reputation are paramount",
    "Cost effective solutions",
    "Saving time and resources",
    "Transparency and communication",
    "Partnership and long term relationships"
];

export default function OurMission() {
    return (
        <section className='our-mission'>

            <div className='our-mission__main-text'>
                OUR MISSION
            </div>


            <div className='our-mission__content'>
                <div className='our-mission__description'>
                    <div className='our-mission__description-text'>
                        We believe that teamwork and partnership
                        are key to our joint success. Our passion is to
                        deliver stable and functional products.
                        We build viable and competitive products from A to Z
                        using the following principles:
                    </div>

                    <ul className="our-mission__mission-list">
                        {missionItems.map((item, index) => (
                            <li className="our-mission__mission-list__li" key={index}>
                                <PointIcon mainColor={'#1F1F1F'}/>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>


                {/*

            <div className='our-mission_description-right'>
                    <div className='our-mission__description-right__block'>
                        <div className='our-mission__description-right__block__div'> Блок 1 </div>
                        <div className='our-mission__description-right__block__div'> Блок 2</div>
                    </div>
                <div className='our-mission__description-right__block'>
                        <div className='our-mission__description-right__block__div'> Блок 3 </div>
                        <div className='our-mission__description-right__block__div'> Блок 4</div>
                    </div>
                <Button text={'About us'} onClick={() => {
                }}/>
            </div>
*/}

            </div>
        </section>
    );
}
