import { Component, OnInit } from '@angular/core';
import { HeroesService, IHeroes } from '../../services/heroes.service'; //importamos nuestro servicio
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:IHeroes[] = [];

  constructor( private _heroesService:HeroesService,
               private _router:Router
    ) {
    console.log('Constructor');

  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }


  verHeroe(idx:number){
    this._router.navigate(['/heroe', idx]);
  }

}
