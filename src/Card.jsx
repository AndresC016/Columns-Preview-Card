import './Card.scss'

export function Card ({bgColor, carImage, carName, description, isSurrounded}) {


    const cardStyle = {
        backgroundColor: bgColor,
    }
    const buttonColor = {
        color: bgColor
    }

    if(isSurrounded === 'left') {
        cardStyle.borderTopLeftRadius = '8px'
        cardStyle.borderBottomLeftRadius = '8px'
    } else if(isSurrounded === 'right') {
        cardStyle.borderTopRightRadius = '8px'
        cardStyle.borderBottomRightRadius = '8px'
    } else if(isSurrounded === 'middle') {
        cardStyle.borderRadius = '0'
    } 

    return (
        <section className="crd-cont" style={cardStyle}>
            <div className='crd-cont_info'>
                {carImage}
                <h2>{carName}</h2>
                <p>
                    {description}
                </p>
            </div>
            
            <button style={buttonColor}>Learn More</button>
        </section>        
    );
}