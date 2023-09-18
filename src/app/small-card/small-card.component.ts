import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {
  @Input() cardDate: string = '';
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() id: string = '';
  isMobileView: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.checkMobileView();
  }

  checkMobileView() {
    if (window.innerWidth < 768) {
      this.isMobileView = true;
    }
  }
}
