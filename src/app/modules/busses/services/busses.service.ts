import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Constants } from '../../shared/config/constants.config';
import { CreateBusDTO } from '../dto/createBus.dto';
import { BusViewModel } from '../viewModels/bus.viewModel';
import { CreateBussesBusStopsDTO } from '../dto/createBussesBusStops.dto';
import { BussesBusStopsViewModel } from '../viewModels/bussesBusStops.viewModel';
import { CreateBusStopDTO } from '../dto/createBusStop.dto';
import { BusStopViewModel } from '../viewModels/busStop.viewModel';
import { CreateLineDTO } from '../dto/createLine.dto';
import { LineViewModel } from '../viewModels/line.viewModel';
import { CreateUsersBussesDTO } from '../dto/createUsersBusses.dto';
import { UsersBussesViewModel } from '../viewModels/usersBusses.viewModel';
import { UserViewModel } from '../viewModels/user.viewModel';

@Injectable()
export class BussesService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly constants: Constants
  ) { }

  createBus(createBusDTO: CreateBusDTO): Observable<BusViewModel> {
    return this.httpClient.post<BusViewModel>(`${this.constants.apiURL}/Busses`, createBusDTO);
  }

  deleteBus(id: string): Observable<BusViewModel> {
    return this.httpClient.request<BusViewModel>('delete' , `${this.constants.apiURL}/Busses`, { body: { id }});
  }

  getBusses(lineId?: string): Observable<BusViewModel[]> {
    return this.httpClient.post<BusViewModel[]>(`${this.constants.apiURL}/Busses/all`, { lineId });
  }

  getBus(id: string): Observable<BusViewModel> {
    return this.httpClient.get<BusViewModel>(`${this.constants.apiURL}/Busses/${id}`);
  }

  createBussesBusStops(createBussesBusStopsDTO: CreateBussesBusStopsDTO): Observable<BussesBusStopsViewModel> {
    return this.httpClient.post<BussesBusStopsViewModel>(`${this.constants.apiURL}/BussesBusStops`, createBussesBusStopsDTO);
  }

  deleteBussesBusStops(id: string): Observable<BussesBusStopsViewModel> {
    return this.httpClient.request<BussesBusStopsViewModel>('delete' , `${this.constants.apiURL}/BussesBusStops`, { body: { id }});
  }

  getBussesBusStopsByBusId(busId: string): Observable<BussesBusStopsViewModel[]> {
    return this.httpClient.post<BussesBusStopsViewModel[]>(`${this.constants.apiURL}/BussesBusStops/busStops`, { busId });
  }

  getBussesBusStopsByBusStopId(busStopId: string): Observable<BussesBusStopsViewModel[]> {
    return this.httpClient.post<BussesBusStopsViewModel[]>(`${this.constants.apiURL}/BussesBusStops/busses`, { busStopId });
  }

  createBusStop(createBusStopDTO: CreateBusStopDTO): Observable<BusStopViewModel> {
    return this.httpClient.post<BusStopViewModel>(`${this.constants.apiURL}/BusStops`, createBusStopDTO);
  }

  deleteBusStop(id: string): Observable<BusStopViewModel> {
    return this.httpClient.request<BusStopViewModel>('delete' , `${this.constants.apiURL}/BusStps`, { body: { id }});
  }

  getBusStops(): Observable<BusStopViewModel[]> {
    return this.httpClient.get<BusStopViewModel[]>(`${this.constants.apiURL}/BusStops`);;
  }

  getBusStop(id: string): Observable<BusStopViewModel> {
    return this.httpClient.get<BusStopViewModel>(`${this.constants.apiURL}/BusStops/${id}`);
  }

  createLine(createLineDTO: CreateLineDTO): Observable<LineViewModel> {
    return this.httpClient.post<LineViewModel>(`${this.constants.apiURL}/Lines`, createLineDTO);
  }

  deleteLine(id: string): Observable<LineViewModel> {
    return this.httpClient.request<LineViewModel>('delete' , `${this.constants.apiURL}/Lines`, { body: { id }});
  }

  getLines(): Observable<LineViewModel[]> {
    return this.httpClient.get<LineViewModel[]>(`${this.constants.apiURL}/Lines`);;
  }

  getLine(id: string): Observable<LineViewModel> {
    return this.httpClient.get<LineViewModel>(`${this.constants.apiURL}/Lines/${id}`);
  }

  createUsersBusses(createUsersBussesDTO: CreateUsersBussesDTO): Observable<UsersBussesViewModel> {
    return this.httpClient.post<UsersBussesViewModel>(`${this.constants.apiURL}/UsersBusses`, createUsersBussesDTO);
  }

  deleteUsersBusses(id: string): Observable<UsersBussesViewModel> {
    return this.httpClient.request<UsersBussesViewModel>('delete' , `${this.constants.apiURL}/UsersBusses`, { body: { id }});
  }

  getUsers(): Observable<UserViewModel[]> {
    return this.httpClient.get<UserViewModel[]>(`${this.constants.apiURL}/Auth/users`);
  }
}
