import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-date',
  templateUrl: './binput-date.component.html',
  styleUrls: ['./binput-date.component.scss']
})
export class BInputDateComponent extends BInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
