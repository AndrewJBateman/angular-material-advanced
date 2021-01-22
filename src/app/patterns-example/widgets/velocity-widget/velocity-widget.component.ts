import { Widget } from './../widget.interface';
import { Component } from '@angular/core';
import { WIDGET } from '../widget.token';

// access WIDGET injection token and it will be resolved as an instance of the VelocityWidgetComponent
@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityWidgetComponent,
    },
  ],
})

// implements widget interface that includes load() and refresh() methods
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  load() {
    console.log('Load data from the JIRA API... ');
  }
  refresh() {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
