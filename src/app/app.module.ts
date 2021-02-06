import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTES } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsurioNuevoComponent } from './components/usuario/usurio-nuevo.component';
import { UsurioEditarComponent } from './components/usuario/usurio-editar.component';
import { UsurioDetalleComponent } from './components/usuario/usurio-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltarDirective,
    NgSwitchComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    UsurioNuevoComponent,
    UsurioEditarComponent,
    UsurioDetalleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
