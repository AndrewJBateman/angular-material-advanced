import { Widget } from './widget.interface';
import { InjectionToken } from '@angular/core';

// Widget can be either weather or velocity component
// Widget includes load() and refresh() methods
export const WIDGET = new InjectionToken<Widget>('Widget');
