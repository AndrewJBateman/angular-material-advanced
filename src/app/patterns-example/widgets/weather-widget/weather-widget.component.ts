import { WIDGET } from './../widget.token';
import { Component } from '@angular/core';
import { Widget } from '../widget.interface';

// access WIDGET injection token and it will be resolved as an instance of the WeatherWidgetComponent
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
})

// implements widget interface that includes load() and refresh() methods
export class WeatherWidgetComponent implements Widget {
  isLoading = false;
  load() {
    console.log('Load data from the WEATHER API... ');
  }
  refresh() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
