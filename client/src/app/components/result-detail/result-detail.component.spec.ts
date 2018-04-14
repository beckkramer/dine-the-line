import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDetailComponent } from './result-detail.component';

fdescribe('ResultDetailComponent', () => {
  let component: ResultDetailComponent;
  let fixture: ComponentFixture<ResultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDetailComponent);
    component = fixture.componentInstance;
    component.result = {
      "id": "V3_UIvTZGIOMFM93LZF9TA",
        "alias": "laschets-inn-chicago-2",
        "name": "Laschet's Inn",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/oM609C6ZVvRk41c88pGWxg/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/laschets-inn-chicago-2?adjust_creative=9gi-w3z_wJ-dp2iLaS3Fuw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9gi-w3z_wJ-dp2iLaS3Fuw",
        "review_count": 437,
        "categories": [{
            "alias": "german",
            "title": "German"
        }, {
            "alias": "pubs",
            "title": "Pubs"
        }],
        "rating": 4.5,
        "coordinates": {
            "latitude": 41.95381,
            "longitude": -87.68198
        },
        "transactions": [],
        "price": "$$",
        "location": {
            "address1": "2119 W Irving Park Rd",
            "address2": "",
            "address3": "",
            "city": "Chicago",
            "zip_code": "60618",
            "country": "US",
            "state": "IL",
            "display_address": ["2119 W Irving Park Rd", "Chicago, IL 60618"]
        },
        "phone": "+17734787915",
        "display_phone": "(773) 478-7915",
        "distance": 592.8495461605568
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
