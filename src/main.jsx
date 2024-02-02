import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Card } from './Card'
import { carsData } from './CarsData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card {...carsData[0]} isSurrounded='left' />
    <Card {...carsData[1]} isSurrounded='middle' />
    <Card {...carsData[2]} isSurrounded='right' />
  </React.StrictMode>,
)
