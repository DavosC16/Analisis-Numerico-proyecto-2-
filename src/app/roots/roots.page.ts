import { Component, OnInit } from '@angular/core';
import { getCoef, BirgeVieta, getRoots } from '../services/variables.services';

@Component({
  selector: 'app-roots',
  templateUrl: './roots.page.html',
  styleUrls: ['./roots.page.scss'],
})
export class RootsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    BirgeVieta();
    getCoef();
  }

  roots=getRoots();

}
