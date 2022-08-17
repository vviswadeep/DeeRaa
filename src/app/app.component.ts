import { publishFacade } from '@angular/compiler';
import { Component, VERSION } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  constructor(private modalService: NgbModal, config: NgbCarouselConfig) {
    config.interval = 2000;
  }
  name = 'Angular ' + VERSION.major;
  active = 1;
}
