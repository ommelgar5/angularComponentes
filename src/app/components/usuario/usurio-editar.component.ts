import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usurio-editar',
  template: `
    <div class="alert alert-success mt-3">
      <strong>Editando...</strong> este es el componente de editar
    </div>
  `,
  styles: [
  ]
})
export class UsurioEditarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
