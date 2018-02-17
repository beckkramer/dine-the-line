import { Component, OnInit } from '@angular/core';
import { Station } from '../../station';
import { StationSelectorService } from './station-selector.service';

@Component({
  selector: 'app-station-selector',
  templateUrl: './station-selector.component.html',
  styleUrls: ['./station-selector.component.scss']
})
export class StationSelectorComponent implements OnInit {

  stations: Station[];
  selectedStation: Station;

  constructor(private stationSelectorService: StationSelectorService) { }

  ngOnInit() {
    this.getAllStations();
  }

  getAllStations(): void {
    this.stationSelectorService
      .getAllStations()
      .subscribe(stations => this.stations = stations);
  }

  onSelect(station: Station): void {
    this.selectedStation = station;
  }

}
