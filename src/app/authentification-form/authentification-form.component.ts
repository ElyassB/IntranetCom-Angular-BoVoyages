import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css']
})
export class AuthentificationFormComponent implements OnInit {
  username = '';
  password = '';
  message = '';

  constructor(private service: AuthentificationService) { }

  ngOnInit(): void {
  }


  authentificate() {
    this.service.authentificationCom(this.username, this.password)
    .then(vu => {
      if (vu.username) {this.message = `connexion effectuée`;
    } else {
      this.message = `connexion a échouée`;
    }
    },
    err => {
      console.log(err);
      this.message = `connexion interdite`;
    }
    );
  }

  onSubmit() {
    this.service.authentificationCom(this.username, this.password);
    console.log(this.username);
  }


}
