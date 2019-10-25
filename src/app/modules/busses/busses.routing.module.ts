import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { BussesComponent } from './components/busses/busses.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: BussesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BussesRoutingModule {}
