import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataFakeList = dataFake;
  isMobileView = false;
  
  // Obtenha o último item da lista
  lastItem = this.dataFakeList[this.dataFakeList.length - 1];
  
  // Obtenha os três itens anteriores
  previousItems = this.dataFakeList.slice(0, this.dataFakeList.length - 1).reverse();

  constructor() { }

  ngOnInit(): void {

  }

}
