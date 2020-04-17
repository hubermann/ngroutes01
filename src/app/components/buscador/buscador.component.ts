import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})

export class BuscadorComponent implements OnInit {

  heroes:any[] = [];

  constructor( private activatedroute:ActivatedRoute, private _heroesService:HeroesService ) { }

  ngOnInit() {

    this.activatedroute.params.subscribe( params => {
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );

    });
  }

}
