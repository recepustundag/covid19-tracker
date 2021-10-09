import React from 'react'
import { useSelector } from 'react-redux'
import { formatCash } from '../utils/commonFunctions'

const MapSwitcher = () => {
  const info = useSelector((state) => state.covid.mapInfo)

  return (
    <div className="map-switcher">
      <div className="highlight"></div>
      <div className="map-switcher-item confirmed">
        <h5>Confirmed</h5>
        <h4>+{formatCash(info.todayCases) }</h4>
        <h1>{ formatCash(info.todayCases) }</h1>
      </div>
      <div className="map-switcher-item actived">
        <h5>Activated</h5>
        <h4>+{ formatCash(info.activePerOneMillion) }</h4>
        <h1>{ formatCash(info.active) }</h1>
      </div>
      <div className="map-switcher-item recovered">
        <h5>Recovered</h5>
        <h4>+{ formatCash(info.todayRecovered) }</h4>
        <h1>{ formatCash(info.recovered) }</h1>
      </div>
      <div className="map-switcher-item deceased">
        <h5>Deceased</h5>
        <h4>+{ formatCash(info.todayDeaths) }</h4>
        <h1>{ formatCash(info.deaths) }</h1>
      </div>
    </div>
  )
}

export default MapSwitcher
