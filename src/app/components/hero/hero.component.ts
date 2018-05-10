import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  constructor( private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parameters =>{
      alert(parameters);
    });

  }

}
