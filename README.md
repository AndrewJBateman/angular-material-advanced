# :zap: Angular Material Advanced
 
* **advanced-search-form** search from a list of countries shown in a drop-down list
* **complex-form-control** Custom form field control with Angular Material & Reactive Forms using the [Angular Material design component library](https://material.angular.io/)
* **overlay-example** Angular Date Range Picker:
* **patterns example** Bridge Angular design pattern: velocity and weather widgets using a common wrapper
* **Code by Dmytro Mezhenskyi** from [Dev Plus Plus](https://www.youtube.com/channel/UCSj1Igu3ejxqcQISNEmx8VQ) - see [:clap: Inspiration](#clap-inspiration) below. I am using it to learn a higher level of Angular programming

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Material Table](#zap-angular-material-table)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Multiple tutorial modules use the same code base - selected in `app.component.html` by commenting out unused modules

**Uses these tools**
* [Angular Material Datepicker](https://material.angular.io/components/datepicker/overview) to be able to enter a date either through text input or by choosing a date from the calendar
* [@Angular/core ContentChild](https://angular.io/api/core/ContentChild) parameter decorator that configures a content query - to get reference to the template component
* [ControlValueAccessor Interface](https://angular.io/api/forms/ControlValueAccessor) used as an interface that acts as a bridge between the Angular forms API and a native element in the DOM
* [Angular component error state](https://github.com/angular/components/blob/master/src/material/core/common-behaviors/error-state.ts)
* [Angular material overlay directive](https://github.com/angular/components/blob/master/src/cdk/overlay/overlay-directives.ts)

**RxJS**
* [RxJS iif](https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif) used to subscribe to first or second observable based on a condition
* [RxJS merge](https://www.learnrxjs.io/learn-rxjs/operators/combination/merge) to turn multiple observables into a single observable
* [RxJS EMPTY](https://rxjs-dev.firebaseapp.com/api/index/function/empty) to creates an Observable that emits no items to the Observer and immediately emits a complete notification - with no scheduler.

## :camera: Screenshots

![Example screenshot](./img/dropdown.jpg)

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular Material v11](https://material.angular.io/)
* [RxJS v6](https://rxjs-dev.firebaseapp.com/guide/overview) library of observable sequences

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
* Run `ng update` to update Angular
* Individual modules are selected in the `app.component.html` by commenting out the other modules

## :computer: Code Examples

```html

```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: Incomplete
* To-Do: Complete

## :clap: Inspiration

* Project inspired by these Youtube tutorials by [Dev Plus Plus](https://www.youtube.com/channel/UCSj1Igu3ejxqcQISNEmx8VQ)

* **advanced-search-control**
* [Angular Material - Custom Form Field Control [Advanced, 2020, Pt.1]](https://www.youtube.com/watch?v=8ThVof0Rz64)
* [Angular Material - Custom Form Field Control [Advanced, 2020, Pt.2]](https://www.youtube.com/watch?v=AZsw2nRxkBk&t=8s)

* **complex-form-control**
* [Control Value Accessor in Angular [Advanced, 2020]](https://www.youtube.com/watch?v=OrmIfW8Ak3w)

* **overlay-example**
* [Angular Material CDK - Overlay Module Pt.1 (Comprehensive overview, Angular 9 / 2020)](https://www.youtube.com/watch?v=Dkh0zpsc0Zw)
* [Angular CDK - Overlay Module Pt.2 (Advanced, 2020)](https://www.youtube.com/watch?v=2pS9bYtsBRo)
* [Angular material date range picker [Detailed overview, 2020]](https://www.youtube.com/watch?v=F5bwreD6N9g)

* **patterns-example** 
* [Angular Design Patterns – Bridge [Advanced, 2020]](https://www.youtube.com/watch?v=2rQOu9TmuxE)


## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
