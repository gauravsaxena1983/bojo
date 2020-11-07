import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-number',
  templateUrl: './binput-number.component.html',
  styleUrls: ['./binput-number.component.scss']
})
export class BInputNumberComponent extends BInput implements OnInit {

  ngOnInit() {
  }

}
