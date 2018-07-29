import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter-set',
  templateUrl: './filter-set.component.html',
  styleUrls: ['./filter-set.component.scss']
})
export class FilterSetComponent implements OnInit {

  genderNeutral: Boolean = false;
  openNow: Boolean = false;
  priceValues: any = [
    'Under $10',
    '$11 to $30',
    '$31 to $60',
    'Above $60',
  ];
  resultFilters: any;
  sortValues: any = ['distance', 'rating', 'review count', 'best match'];

  @Input() currentFilters: any;
  @Output() resultFilterEmitter:EventEmitter <any> = new EventEmitter();

  constructor() { }

//price

  ngOnInit() {
    this.resultFilters = new FormGroup({
      price: new FormArray(this.makeControls(this.priceValues)),
      gender_neutral_restrooms: new FormControl(false),
      open_now: new FormControl(false),
      sort_by: new FormControl('distance'),
    });
  }

  makeControls(values = []) {

    let controlArray = [];

    values.forEach(() => {
      controlArray.push(new FormControl(true));
    });

    return controlArray;
  }

  makePriceLabel(times) {
    const price = '$';
    return price.repeat(times);
  }

  makePriceString(chosenValues=[]) {

    let prices = [];

    chosenValues.map((value, index) => {
      if (value) {
        prices.push(index+1);
      }
    })

    return prices.join();
  }

  updateResultFilters() {
    const filters = this.resultFilters;
    filters.value.price = this.makePriceString(this.resultFilters.value.price);
    this.resultFilterEmitter.emit(filters.value);
  }
}
