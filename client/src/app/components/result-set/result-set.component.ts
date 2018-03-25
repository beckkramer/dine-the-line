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

  getResults(station: Station): void {
    this.ResultsService
      .getResults(station.location)
      .subscribe(results => {
        this.results = results.jsonBody.businesses
      });
  }
}
