import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  isMarvel:boolean = false;
  heroe: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
    ) {

    this._activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    } );
    this.Marvel();
   }

   Marvel(){
    if (this.heroe.casa == "Marvel"){
      this.isMarvel = true;
    }
    else{
      this.isMarvel = false;
    }
   }
}
