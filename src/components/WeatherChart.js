import React from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-charts'

function WeatherChart(props) {

  const data = props.weatherCharts
  
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )


  const lineChart = (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '100%',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} tooltip />
    </div>
  )

  return lineChart
}


const mapStateToProps = (state) => {
  return {
    weatherCharts: state.weatherCharts
  }
}

const connectedWeatherChart = connect(mapStateToProps)(WeatherChart)

export default connectedWeatherChart