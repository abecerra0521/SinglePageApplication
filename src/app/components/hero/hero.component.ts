import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Hero} from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService
  ) {
    this.activatedRoute.params.subscribe(parameters =>{
      this.heroe = this._heroesServices.getHeroById(parameters['id']);
      console.log(this.heroe);
    });

  }

}
