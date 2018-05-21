import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() item : any = {};
  @Input() index: number;

  constructor(
      private router:Router
  ) {
   }

  ngOnInit() {
  }

  HeroDetails(){
    this.router.navigate(['/hero',this.index]);
  }

}
