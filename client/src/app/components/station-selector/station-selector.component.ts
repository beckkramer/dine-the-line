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

  stations: Station[];
  displayStation: Station;
  linesToFilter: any = [];

  constructor(
    private StationService: StationService,
  ) { }

  ngOnInit() {
    this.getAllStations();
  }

  getAllStations(): void {
    this.StationService
      .getAllStations()
      .subscribe(stations => this.stations = stations);
  }

  reset(): void {
    this.selectedStation.emit(null);
    this.displayStation = null;
  }

  selectStation(station: Station): void {
    this.selectedStation.emit(station);
    this.displayStation = station;
  }

  filterStations(filters: any) {
    this.linesToFilter = filters.linesToFilter;
  }
}

