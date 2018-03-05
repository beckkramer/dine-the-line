import { Component } from '@angular/core';
import { Station } from './station';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  currentStation:Station;

  loadStation(selectedStation: Station) {
    this.currentStation = selectedStation;
  }
}
