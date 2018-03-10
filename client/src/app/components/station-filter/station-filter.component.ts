import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-station-filter',
  templateUrl: './station-filter.component.html',
  styleUrls: ['./station-filter.component.scss']
})
export class StationFilterComponent implements OnInit {

  filters: FormGroup;
  lines: any = ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown'];

  @Input() currentFilters: any;
  @Output() stationFilters:EventEmitter <any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.filters = new FormGroup({
      selectedLines: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
    });
  }

  showA11yOnlyStations() {}
  updateSelectedLines() {
    const selectedLines = this.filters.value.selectedLines;
    const filters = {
      lines: [],
    };

    selectedLines.forEach((line, index, []) => {
      if (line) {
        filters.lines.push(this.lines[index]);
      }
    });

    this.stationFilters.emit(filters);
  }

}
