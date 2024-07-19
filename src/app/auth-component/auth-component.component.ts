import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
})
export class AuthComponentComponent implements OnInit {
  screen: any = 'signin';
  formData: FormGroup;
  isLoading: boolean = false;
  constructor(private fb:FormBuilder, private router: Router, private navCtrl: NavController) {
    this.formData = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required]],
    });
  }

  ngOnInit() {}

  change(event){
    this.screen = event;
  }

    login() {
      this.navCtrl.navigateForward('/gate');
    }

    toggleDarkMode() {
      document.body.classList.toggle('dark');
    }
}

