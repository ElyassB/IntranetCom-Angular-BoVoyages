import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';
import{DestinationService} from '../destination.service';
import { AuthentificationFormComponent } from '../authentification-form/authentification-form.component';

@Component({
  selector: 'app-pageaccueil',
  templateUrl: './pageaccueil.component.html',
  styleUrls: ['./pageaccueil.component.css']
})
export class PageaccueilComponent implements OnInit {

  destinations :Destination[] = [];
  nom :string;
  image :string;//a modifier surement

  message :string;

  constructor(private destinationService: DestinationService) { }


  ngOnInit(){
   
    this.destinationService.change.subscribe(datas => this.destinations = datas);
     this.destinationService.getAllDestinations();
  }

  // ngOnDestroy() {
  //   this.destinationService.change.unsubscribe();
  // }

}
