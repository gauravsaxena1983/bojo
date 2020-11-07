import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-ref',
  templateUrl: './binput-ref.component.html',
  styleUrls: ['./binput-ref.component.scss']
})
export class BInputRefComponent extends BInput implements OnInit {

  ngOnInit() {
  }

}
