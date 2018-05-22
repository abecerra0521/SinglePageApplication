import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() item : any = {};
  @Input() index: number;
  @Output() HeroeSelect: EventEmitter<number>;

  constructor( private router:Router,) {
    this.HeroeSelect = new EventEmitter();
   }

  ngOnInit() {
  }

  HeroDetails(){
    this.router.navigate(['/hero',this.index]);
    //this.HeroeSelect.emit(this.index);
  }

}
