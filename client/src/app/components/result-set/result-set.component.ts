import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ResultsService } from '../../services/results.service';

import { Business } from '../../business';
import { Station } from '../../station';

@Component({
  selector: 'app-result-set',
  templateUrl: './result-set.component.html',
  styleUrls: ['./result-set.component.scss']
})
export class ResultSetComponent implements OnInit {

  @Input() station: Station;

  results: Business[];

  constructor(
    private ResultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.getResults(this.station);
  }

  filterResults(filters) {
    this.getResults(this.station, filters);
  }

  getResults(station: Station, filters: any = []): void {
    this.ResultsService
      .getResults(station.location, filters)
      .subscribe(results => {
        this.results = results.jsonBody.businesses
      });
  }
}
