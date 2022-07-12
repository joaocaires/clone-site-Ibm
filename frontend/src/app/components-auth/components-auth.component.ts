import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import { BackLoginService } from '../services/back-login.service';
import { classLogin } from '../services/classAuth';

@Component({
  selector: 'app-components-auth',
  templateUrl: './components-auth.component.html',
  styleUrls: ['./components-auth.component.css']
})
export class ComponentsAuthComponent implements OnInit { 

  public classLogin!: classLogin

  constructor(private backLoginService: BackLoginService, private router: Router, private alertService: AlertService){}

  ngOnInit(): void {
    this.classLogin = new classLogin()
  }

  public makeLogin(): void{
    this.backLoginService.log(this.classLogin).subscribe((data) => {
      this.router.navigate(['auth/User'])
    },
    (error) => {
      this.alertService.error(error.error.message);
    })
  }
}