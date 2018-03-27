import { Component } from '@angular/core';
import { Station } from './station';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentStation: Station;
  initialView: boolean = true;

  loadStation(selectedStation: Station) {
    this.currentStation = selectedStation;
  }

  start() {
    this.initialView = false;
  }
}
