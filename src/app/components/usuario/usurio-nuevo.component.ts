import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usurio-nuevo',
  template: `
    <p class="text-primary">
        El ID del usuario para crear es: {{ idUsuario }}
    </p>
  `,
  styles: [
  ]
})
export class UsurioNuevoComponent implements OnInit {

  idUsuario: number;

  constructor(private router: ActivatedRoute ) {
    console.log("Ruta HIJA usuario nuevo");
    /*
      Obtener todos los parametros del padre desde una ruta hija

      Seguido de objeto router se coloca la propiedad .parent para regresar al padre de la ruta actual
    */
    this.router.parent.params.subscribe( (parametros) => {
      console.log(parametros);
      this.idUsuario = parametros['id'];
    });
  }

  ngOnInit(): void {
  }



}
