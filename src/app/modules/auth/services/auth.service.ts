import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Constants } from '../../shared/config/constants.config';
import { AuthResponseDTO } from '../dto/authResponse.dto';
import { StorageService } from '../../shared/services/storage.service';
import { JWT_KEY } from '../../../constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly constants: Constants,
    private readonly storageService: StorageService
  ) { }

  register(email: string, password: string): Observable<AuthResponseDTO> {
    return this.httpClient.post<AuthResponseDTO>(`${this.constants.apiURL}/Auth/local/signup`, { email, password }).pipe(
      map(response => {
        this.storageService.setItem(JWT_KEY, response.token);

        return response;
      })
    );
  }

  login(email: string, password: string): Observable<AuthResponseDTO> {
    return this.httpClient.post<AuthResponseDTO>(`${this.constants.apiURL}/Auth/local/signin`, { email, password }).pipe(
      map(response => {
        this.storageService.setItem(JWT_KEY, response.token);

        return response;
      })
    );
  }
}
