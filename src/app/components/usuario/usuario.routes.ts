import { Routes } from '@angular/router';

import { UsurioNuevoComponent } from './usurio-nuevo.component';
import { UsurioEditarComponent } from './usurio-editar.component';
import { UsurioDetalleComponent } from './usurio-detalle.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsurioNuevoComponent },
  { path: 'editar', component: UsurioEditarComponent },
  { path: 'detalle' , component: UsurioDetalleComponent },
  { path: '**', redirectTo: 'editar', pathMatch: 'full' }
];
