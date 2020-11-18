import { HeroesService, IHeroes } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// importamos el modulo anterior para poder recibir el parametro mediante la url


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: IHeroes[] = [];
  termino: string = "";

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ) {

   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })

  }

}
