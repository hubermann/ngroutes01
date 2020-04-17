import { Component, OnInit } from '@angular/core';
//import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) {
    console.log('Navbarcomponent running');
  }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    this.router.navigate( ['/buscador', termino] )
  }

  // public buscarHeroe(termino){

  //   console.log('>>>>'+termino);
  //   this._heroesService.buscarHeroe(termino);
  // }

}
