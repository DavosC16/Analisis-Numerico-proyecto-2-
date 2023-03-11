import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getN,setCoef } from '../services/variables.services'

@Component({
  selector: 'app-polynomial',
  templateUrl: './polynomial.page.html',
  styleUrls: ['./polynomial.page.scss'],
})
export class PolynomialPage implements OnInit {

  constructor(private router: Router) { }

  n=getN();

  coef=Array();

  ngOnInit() {
    for(let i=0; i<=this.n; i++){
      if(i==0){
        this.coef[i]=1;
      }
      else{
        this.coef[i]=0;
      }
    }
  }

  Click(){
    console.log(this.coef);
    setCoef(this.coef);
    this.router.navigateByUrl("/roots");
  }

}
