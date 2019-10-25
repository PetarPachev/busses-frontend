import { Provider } from '@angular/core';

import { Constants } from '../config/constants.config';

export const CONSTANTS_PROVIDERS: Provider[] = [
  {
    provide: Constants,
    useClass: Constants
  }
];
