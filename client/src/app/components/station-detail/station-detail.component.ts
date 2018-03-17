import { Component, Input, OnInit} from '@angular/core';
import { Station } from '../../station';

@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.scss']
})

export class StationDetailComponent implements OnInit {

  @Input() station: Station;

  lines: string;

  constructor() { }

  ngOnInit() {
    this.lines = this.station.lines.active.join(' / ');
  }

}
