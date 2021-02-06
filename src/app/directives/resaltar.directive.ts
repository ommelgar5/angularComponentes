import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

/*
Una directiva es un atributo que se le puede aplicar a un elemento
y aplique una bloque de codigo previamente difinido en la directiva usada

ElementRef
  Nos permite obtener el elemento donde se aplico la directiva

HostListener
  es un decorador que escucha los eventos del elemento, no es necesio instanciarlo


*/

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  //@Input[variable] alias: tipo = valorPorDefecto;
  @Input("appResaltar") colorEntrada: string = 'valorPorDefecto';

  constructor(private el: ElementRef ) {
    console.log('Directiva ejecutada');
    console.log(this.colorEntrada);

  }

  // @HostListener(evento) alias() { }
  @HostListener('mouseenter') mouseEntra() {
    this.ejecutar(this.colorEntrada);
  }

  @HostListener('mouseleave') mouseFuera() {
    this.ejecutar(null);
    this.el.nativeElement.style.color = null;
  }

  ejecutar(color: string  = null){
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = '#fff';
  }

}
