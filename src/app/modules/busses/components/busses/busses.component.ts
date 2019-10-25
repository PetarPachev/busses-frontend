import { Component, OnInit } from '@angular/core';
import { BussesService } from '../../services/busses.service';

@Component({
  selector: 'app-busses',
  templateUrl: './busses.component.html',
  styleUrls: ['./busses.component.scss']
})

export class BussesComponent implements OnInit {
  constructor(
    private readonly bussesService: BussesService
  ) { }

  ngOnInit() {
    
  }
}
