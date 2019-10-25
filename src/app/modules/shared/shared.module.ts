import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CONSTANTS_PROVIDERS } from './providers/constants.providers';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UnauthGuard } from './guards/unauth.guard';
import { StorageService } from './services/storage.service';
import { NgSelectModule } from '@ng-select/ng-select';

const MODULES = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule];

const GUARDS = [AuthGuard, UnauthGuard];

const PROVIDERS = [...CONSTANTS_PROVIDERS];

const SERVICES = [StorageService];

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...GUARDS,
        ...PROVIDERS,
        ...INTERCEPTORS,
        ...SERVICES
      ]
    }
  }
}
