import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [
    `

    /*
    Los estilos aplicados a un componente tiene el scope de ese componente
    Angular agrega un atributo a cada componente para identificar a los elementos y aplicar
    el CSS a esos componentes

    Como son identificados el elemento
      <p _ngcontent-gwd-c11></p>

    La clase aplicada
      selector[attributo]
      p[_ngcontent-gwd-c11] : {
        color: red
      }

    La unica manera de afectar a todos los elementos de la aplicacion es
    modificando el archivo styles.css en la raiz dentro del src

    */
      p {
        color: red;
        font-size: 20px;
      }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
