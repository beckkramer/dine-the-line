import { Component, Input, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Station } from '../../station';

@Component({
  selector: 'app-result-set',
  templateUrl: './result-set.component.html',
  styleUrls: ['./result-set.component.css']
})
export class ResultSetComponent implements OnInit {

  @Input() station: Station;

  results:any;

  constructor(
    private ResultsService: ResultsService,
  ) { }

  ngOnInit() {
    console.log(this.station);
    this.getResults(this.station);
  }

  getResults(station: Station): void {
    this.ResultsService
      .getResults(station.location)
      .subscribe(results => this.results = results.businesses);
  }

}
