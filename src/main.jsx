import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Card } from './Card'
import { SedanImg } from './SedanImg'
import { SuvsImg } from './SuvsImg'
import { LuxuryImg } from './LuxuryImg'

const Bright_orange = 'hsl(31, 77%, 52%)'
const Dark_cyan = 'hsl(184, 100%, 22%)'
const Very_dark_cyan = 'hsl(179, 100%, 13%)'

const data = [
    {
        bg: Bright_orange,
        img: <SedanImg />,
        name: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
    },
    {
        bg: Dark_cyan,
        img: <SuvsImg />,
        name: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
    },
    {
        bg: Very_dark_cyan,
        img: <LuxuryImg />,
        name: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card bgColor={data[0].bg} carImg={data[0].img} carName={data[0].name} description={data[0].description} />
    <Card bgColor={data[1].bg} carImg={data[1].img} carName={data[1].name} description={data[1].description} />
    <Card bgColor={data[2].bg} carImg={data[2].img} carName={data[2].name} description={data[2].description} />
  </React.StrictMode>,
)
