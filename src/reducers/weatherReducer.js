import weatherService from '../services/weatherService'
import React from 'react'

const weatherReducer = (state = [], action) => {
    switch (action.type) {
        // case 'NEW_PROJECT':
        //     return [...state, action.data]
        case 'INIT_WEATHER':
            return state.concat(action.data)
        default:
            return state
    }
}

export const initializeWeatherData = (weatherData) => {
    return async dispatch => {
        const fetchWeatherData = await weatherService.getWeather()
        const dht = fetchWeatherData.data.dht
        const owm = fetchWeatherData.data.owm
        const current = fetchWeatherData.data.current

        //difference of dht and owm in an array
        var differenceSum = (function () {
            var x = 0;
            for (var i = 0; i < dht.length; i++) {
                x = x + dht[i] - owm[i]
            }
            return x
        })();

        //Tomorrows weather = current broadcast + average of difference
        const weatherBroadcastForTomorrow = current + (differenceSum / dht.length)

        const variation = (function () {
            var x = [];
            for (var i = 0; i < dht.length; i++) {
                x[i] = (dht[i] - owm[i]);   //owm - sensori
            }
    
            return x;
        })();


        const dhtSet = dht.concat(weatherBroadcastForTomorrow)
        .map((x, i) => x=[i,x] )
        const owmSet = owm.map((x, i) => x=[i,x] )

          const currentData =         [
            {
              label: 'Dht-22',
              data: dhtSet
            },
            {
              label: 'OpenWeatherMap',
              data: owmSet
            }
            // {
            //   label: 'Series 3',
            //   data: variation
            // }
          ]
 

        dispatch({
      type: 'INIT_WEATHER',
      data: currentData
        })
  }
}

export default weatherReducer