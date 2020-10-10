import {Component, OnInit} from '@angular/core';
// import {AppDataService} from './_shared/_services/app-data.service';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'upgrad-eshop-frontend';
  faShoppingCart = faShoppingCart;
  constructor() {
  }


  ngOnInit(): void {
  }
}
