import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesServices.SearchHero(params['termino']);
      this.termino = params['termino']
      console.log(this.heroes);
    })
  }

}
