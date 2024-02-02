import { SedanImg } from './SedanImg'
import { SuvsImg } from './SuvsImg'
import { LuxuryImg } from './LuxuryImg'

const Bright_orange = 'hsl(31, 77%, 52%)'
const Dark_cyan = 'hsl(184, 100%, 22%)'
const Very_dark_cyan = 'hsl(179, 100%, 13%)'

export const carsData = [
    {
        bgColor: Bright_orange,
        carImage: <SedanImg />,
        carName: 'SEDANS',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
    },
    {
        bgColor: Dark_cyan,
        carImage: <SuvsImg />,
        carName: 'SUVS',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
    },
    {
        bgColor: Very_dark_cyan,
        carImage: <LuxuryImg />,
        carName: 'LUXURY',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
    }
]