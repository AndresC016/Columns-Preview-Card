import './Card.scss'
import { SedanImg } from './SedanImg';

export function Card ({bgColor}) {

    const cardStyle = {
        backgroundColor: bgColor,
    }
    const buttonColor = {
        color: bgColor
    }

    return (
        <section className="crd-cont" style={cardStyle}>
            <div className='crd-cont_info'>
                <SedanImg />
                <h2>SEDANS</h2>
                <p>
                    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
                </p>
            </div>
            
            <button style={buttonColor}>Learn More</button>
        </section>        
    );
}