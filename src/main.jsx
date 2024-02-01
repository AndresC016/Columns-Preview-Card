import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Card } from './Card'



const Bright_orange = 'hsl(31, 77%, 52%)'
const Dark_cyan = 'hsl(184, 100%, 22%)'
const Very_dark_cyan = 'hsl(179, 100%, 13%)'

const data = [
    {
        bg: Bright_orange,
        name: 'Sedans',
        description: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
    },
    {
        bg: Dark_cyan,
        name: 'SUVs',
        description: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
    },
    {
        bg: Very_dark_cyan,
        name: 'Luxury',
        description: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card bgColor={Bright_orange} />
    <Card bgColor={Dark_cyan} />
    <Card bgColor={Very_dark_cyan} />
  </React.StrictMode>,
)
