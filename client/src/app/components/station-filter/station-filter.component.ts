import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-station-filter',
  templateUrl: './station-filter.component.html',
  styleUrls: ['./station-filter.component.scss']
})
export class StationFilterComponent implements OnInit {

  filters: FormGroup;
  lines: any = [];

  @Output() stationFilters:EventEmitter <any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.filters = new FormGroup({
      selectedLines: new FormArray([
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
        new FormControl(true),
      ]),
    });
    this.lines = ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown'];
  }

  updateSelectedLines() {

    const selectedLines = this.filters.value.selectedLines;
    const filters = {
      linesToFilter: [],
    };

    selectedLines.forEach((line, index, []) => {
      if (line) {
        filters.linesToFilter.push(this.lines[index]);
      }
    });

    this.stationFilters.emit(filters);
  }

}
