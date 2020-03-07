import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination';
import{DestinationService} from '../destination.service';

@Component({
  selector: 'app-pageaccueil',
  templateUrl: './pageaccueil.component.html',
  styleUrls: ['./pageaccueil.component.css']
})
export class PageaccueilComponent implements OnInit {

  destinations :Destination[] = [];
  nom :string;
  image :string;//a modifier surement

  constructor(private destinationService: DestinationService) { }

  // ngOnInit(): void {
  //   this.destinationService.change.subscribe(datas => this.destinations = datas);
  // }

  ngOnInit(){
     this.destinationService.getAllDestinations();
  }

  // ngOnDestroy() {
  //   this.destinationService.change.unsubscribe();
  // }

}
