import { Component } from '@angular/core';

//para poder recibir parametros de un componente a otro
import { ActivatedRoute } from '@angular/router';

//servicio
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})

export class HeroeComponent{

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = _heroesService.getHeroe( params['id'] );
    });
  }


}
