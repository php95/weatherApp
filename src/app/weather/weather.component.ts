import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weatherData = [
    {iconSrc:"../../assets/min-temp.png",tempType:"min",value:"12"},
    {iconSrc:"../../assets/max-temp.png",tempType:"max",value:"20"},
    {iconSrc:"../../assets/humidity.png",tempType:"min",value:"15%"},
    {iconSrc:"../../assets/wind.png",tempType:"wind",value:"23 km/h"}
  ]

}
