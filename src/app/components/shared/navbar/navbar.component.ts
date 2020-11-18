import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//ocuoamos la importacion del router para poder navegar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  buscarHeroe(termino: string){
    // console.log(termino);
    this.router.navigate(['/busqueda', termino])
  }

}
