import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-option',
  templateUrl: './binput-option.component.html',
  styleUrls: ['./binput-option.component.scss']
})
export class BInputOptionComponent extends BInput implements OnInit {

  ngOnInit() {
  }

}
