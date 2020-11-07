import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-bool',
  templateUrl: './binput-bool.component.html',
  styleUrls: ['./binput-bool.component.scss']
})
export class BInputBoolComponent extends BInput implements OnInit {

  ngOnInit() {
  }

}
