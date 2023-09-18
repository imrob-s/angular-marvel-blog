import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {
  @Input() cardDate: string = '';
  @Input() photoCover: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() id: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}