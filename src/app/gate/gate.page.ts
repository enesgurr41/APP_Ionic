import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gate',
  templateUrl: 'gate.page.html',
  styleUrls: ['gate.page.scss'],
})
export class GatePage {
  selectedGate: string = '';

  constructor(private router: Router, private navCtrl: NavController) { }

  onChangeColor() {
    console.log('Selected Gate:', this.selectedGate);
  }

  login() {
    this.navCtrl.navigateForward('/gate1'); 
  }
  back() {
      this.navCtrl.back();
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

}
