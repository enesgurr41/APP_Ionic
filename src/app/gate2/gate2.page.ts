import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gate2',
  templateUrl: './gate2.page.html',
})
export class Gate2Page implements OnInit {

  plaka: string = '';
  dorsePlaka: string = '';
  konteynerNo: string = '';
  isoKod: string = '';
  payl: string = '';
  dara: number;
  hasarDurumu: string = 'hasarsız'; // Default hasar durumu

  constructor(private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    // Ensure form is cleared when component initializes
    this.clearForm();
  }

  // Function to clear form data
  clearForm() {
    this.plaka = '';
    this.dorsePlaka = '';
    this.konteynerNo = '';
    this.isoKod = '';
    this.payl = '';
    this.dara = null;
    this.hasarDurumu = 'hasarsız'; // Set to default value
  }

  login() {
    // Perform login actions
    // Navigate to '/gate2' or any other page after successful login
    this.router.navigateByUrl('/gate2');
  }

  back() {
    this.navCtrl.back();
  }
  goToCheckOut() {
    this.router.navigateByUrl('');
  }
  goToGate() {
    this.navCtrl.navigateForward('/gate');
  }
  goToGate1() {
    this.navCtrl.navigateForward('/gate1');
  }
  goToGate2() {
    this.navCtrl.navigateForward('/gate2');
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark');
  }
}
