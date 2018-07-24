import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter-set',
  templateUrl: './filter-set.component.html',
  styleUrls: ['./filter-set.component.scss']
})
export class FilterSetComponent implements OnInit {

  genderNeutral: Boolean = false;
  openNow: Boolean = false;
  resultFilters: any;
  sortValues: any = ['distance', 'best match', 'rating', 'review count'];

  @Input() currentFilters: any;
  @Output() stationFilters:EventEmitter <any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resultFilters = new FormGroup({
      genderNeutralBathrooms: new FormControl(false),
      openNow: new FormControl(false),
      sortBy: new FormControl('distance'),
    });
  }

  updateResultFilters() {

    console.log(this.resultFilters.value);

    this.stationFilters.emit(this.resultFilters);
  }
}
