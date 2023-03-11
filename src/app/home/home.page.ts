import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { setN } from '../services/variables.services'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController,private router: Router) {}
  
  n: any;

  async Click(){
    if(this.n==null){
      const alert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de introducir un numero',
      buttons: ['OK'],
      });

      await alert.present();
    }
    else if(this.n<=0||this.n%1!=0){
      const alert = await this.alertController.create({
      header: 'Error',
      message: 'Favor de introducir un numero valido',
      buttons: ['OK'],
      });

      await alert.present();

      this.n=null;
    }
    else if(this.n%1==0){
      setN(this.n);
      this.router.navigateByUrl('/polynomial');
    }
  }
}
