import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { BussesService } from '../../services/busses.service';
import { LineViewModel } from '../../viewModels/line.viewModel';
import { Observable } from 'rxjs';
import { UserViewModel } from '../../viewModels/user.viewModel';
import { BusViewModel } from '../../viewModels/bus.viewModel';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  @ViewChild('lineInput', { static: true }) lineInput: ElementRef<HTMLInputElement>;
  @ViewChild('busInput', { static: true }) busInput: ElementRef<HTMLInputElement>;
  @ViewChild('busLineSelect', { static: true }) busLineNgSelect: NgSelectComponent;

  lines: LineViewModel[];
  busses: BusViewModel[];
  currentlySelectedBusLine: LineViewModel;
  currentlySelectedBusFilterLine: LineViewModel;
  users: UserViewModel[];

  constructor(
    private readonly bussesService: BussesService
  ) { }

  ngOnInit() {
    this.init();
  }

  onCreateLine() {
    const title = this.lineInput.nativeElement.value;

    this.lineInput.nativeElement.value = null;

    this.bussesService.createLine({ title })
      .subscribe(() => {
        this.initLines();
      });
  }

  onDeleteLine(id: string) {
    this.bussesService.deleteLine(id)
      .subscribe(() => this.initLines());
  }


  onCreateBus() {
    if (!this.currentlySelectedBusLine) {
      return;
    }

    const title = this.busInput.nativeElement.value;
    const lineId: string = this.currentlySelectedBusLine._id;

    this.busInput.nativeElement.value = null;
    this.currentlySelectedBusLine = undefined;
    this.busLineNgSelect.clearModel();

    this.bussesService.createBus({ lineId, title })
      .subscribe(() => {
        this.initBusses();
      });
  }

  onDeleteBus(id: string) {
    this.bussesService.deleteBus(id)
      .subscribe(() => this.initBusses());
  }

  initLines() {
    this.bussesService.getLines().subscribe(lines => this.lines = lines);
  }

  initBusses() {
    this.bussesService.getBusses().subscribe(busses => this.busses = busses);
  }

  initUsers() {
    this.bussesService.getUsers()
      .subscribe(users => this.users = users);
  }

  init() {
    this.initLines();
    this.initBusses();
    this.initUsers();
  }

  onBusAssignToUser(user: UserViewModel, bus: BusViewModel) {
    const userId: string = user._id;
    const busId: string = bus._id;

    this.bussesService.createUsersBusses({
      userId,
      busId
    })
    .subscribe(() => {

    })
  }

  get filteredBussesByLine(): BusViewModel[] {
    if (!this.currentlySelectedBusFilterLine) {
      return this.busses;
    }

    return this.busses.filter(b => b.lineId === this.currentlySelectedBusFilterLine._id);
  }
}
