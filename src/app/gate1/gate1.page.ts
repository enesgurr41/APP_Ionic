import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-gate1',
  templateUrl: './gate1.page.html',
})
export class Gate1Page implements OnInit {

  plaka: string = '';
  dorsePlaka: string = '';
  konteynerNo: string = '';
  isoKod: string = '';
  payl: string = '';
  seal: string = '';
  dara: number;
  gumrukMuhuru: string = '';
  hasarDurumu: string = 'hasarsız'; 

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    this.clearForm();
  }

  clearForm() {
    this.plaka = '';
    this.dorsePlaka = '';
    this.konteynerNo = '';
    this.isoKod = '';
    this.payl = '';
    this.seal = '';
    this.dara = null;
    this.gumrukMuhuru = '';
    this.hasarDurumu = 'hasarsız';
  }

  login() {
    this.router.navigateByUrl('/gate1');
  }

  back() {
    this.clearForm();
    this.navCtrl.back();
  }
  goToCheckOut() {
    this.router.navigateByUrl('');
  }
  goToGate() {
    this.navCtrl.navigateForward('/gate');
  }
  goToGate2() {
    this.navCtrl.navigateForward('/gate2');
  }
    toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
}

