import { Widget } from './../widgets/widget.interface';
import { WIDGET } from './../widgets/widget.token';
import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss'],
})
export class WidgetWrapperComponent implements OnInit {

  // ContentChild allow you to get reference to the component that is being rendered
  // WIDGET is a bridge - it is the velocity or weather widget - avoids creating 2 ContentChildren
  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;

  ngOnInit() {
    this.widget.load();
  }

  onRefresh() {
    this.widget.refresh();
  }
}
