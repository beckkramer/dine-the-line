import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Station } from '../../station';
import { StationService } from '../../services/station.service';

@Component({
  selector: 'app-station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {

  @Output() selectedStation:EventEmitter <Station> = new EventEmitter();

  allStations: Station[];
  stations: Station[];
  displayStation: Station;
  linesToFilter: any = [];

  constructor(
    private StationService: StationService,
  ) { }

  ngOnInit() {
    this.getAllStations();
  }

  ngOnChange() {
    console.log('there!');
  }

  getAllStations(): void {
    this.StationService
      .getAllStations()
      .subscribe(stations => {
        this.allStations = stations;
        this.stations = stations;
      });
  }

  getFilteredStations(filters: any): void {
    this.StationService
      .getFilteredStations(filters, this.allStations)
      .subscribe(stations => this.stations = stations);
  }

  reset(): void {
    this.selectedStation.emit(null);
    this.displayStation = null;
    this.linesToFilter = [];
  }

  selectStation(station: Station): void {
    this.selectedStation.emit(station);
    this.displayStation = station;
  }

  filterStations(filters: any) {
    this.linesToFilter = filters.lines;
    this.getFilteredStations(filters);
  }
}

