import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <div>

      <!-- <p [ngStyle]="{ 'font-size': '40px' }"> -->
      <!-- <p [ngStyle]="{ 'font-size.px': tamano }"> -->
      <p [style.fontSize.px]="tamano">
        Hola mundo...  ngStyle
      </p>

      <button class="btn btn-primary me-1"
              (click)="tamano = tamano + 5">
        <i class="fa fa-plus"></i>
      </button>
      <button class="btn btn-primary"
              (click)="tamano = tamano - 5">
        <i class="fa fa-minus"></i>
      </button>

    </div>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  tamano: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
