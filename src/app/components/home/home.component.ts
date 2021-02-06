
/*
    lifecycle Hooks - Ciclo de vida de un componente
*/
import {
          Component,
          OnInit,
          OnChanges,
          DoCheck,
          AfterContentInit,
          AfterContentChecked,
          AfterViewInit,
          AfterViewChecked,
          OnDestroy
        } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-ng-style></app-ng-style>


  <app-css></app-css>


  <!-- parte del demo del componenete css -->
  <!-- <p>
    Hola desde app.component!!!
  </p> -->


  <app-clases></app-clases>


  <!--
      Ocupamos al directiva para enviar el dato y recuperarlo

      Como si enviaramos un dato a un componente hijo
      @Input('color') colorDesdePadre: string;
      Uso
      <app-demo [color]="'yellow'"></app-demo>

      En este caso estamos usando como atributo del elemento y para vincularlo y enviar datos
   -->
   <!-- Parte de directivas persnonalizadas -->
  <p [appResaltar]="'red'">
    Hola mundo con directiva personalizada appResaltar
  </p>

  <app-ng-switch></app-ng-switch>



  `
})
export class HomeComponent implements OnInit,
                                      OnChanges,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy
                                      {

  constructor(){
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnChanges(): void{
    console.log("ngOnChanges");
  }

  ngDoCheck(): void{
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void{
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void{
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void{
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(): void{
    console.log("ngOnDestroy");
  }

}
