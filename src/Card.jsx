import './Card.scss'

export function Card (bgColor, carName, carImg, description) {

    return (
        <section className="crd-cont" style={{background: bgColor}}>
            <div className='crd-cont_info'>
                {carImg}
                <h2>{carName}</h2>
                <p>
                    {description}
                </p>
            </div>
            
            <button>Learn More</button>
        </section>        
    );
}