import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgbModal
} from '@ng-bootstrap/ng-bootstrap';

import {
  // NgbCarouselConfig,
  NgbNavChangeEvent,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
  // providers: [NgbCarouselConfig],
})
export class FirstPageComponent {
  constructor(private modalService: NgbModal){}
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
}
