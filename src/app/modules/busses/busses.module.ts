import { NgModule } from "@angular/core";

import { BussesRoutingModule } from './busses.routing.module';
import { BussesComponent } from './components/busses/busses.component';
import { LinesComponent } from './components/lines/lines.component';
import { BussesService } from './services/busses.service';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BussesRoutingModule
  ],
  providers: [
    BussesService
  ],
  declarations: [
    BussesComponent,
    LinesComponent,
    AdminComponent
  ]
})
export class BussesModule {}
