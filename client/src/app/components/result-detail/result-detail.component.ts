import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  @Input() result: any;

  rating_alt: string;
  star_image: string;

  constructor() { }

  ngOnInit() {
    if(this.result.rating) {
      this.rating_alt = 'rated ' + this.result.rating + ' stars';
      this.star_image = 'assets/img/yelp/stars/regular_' + String(this.result.rating).replace('.5', '_half') + '.png';
    }
  }
}
