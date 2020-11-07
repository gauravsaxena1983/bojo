import { Component, OnInit } from '@angular/core';
import { BInput } from 'src/app/common/binput';

@Component({
  selector: 'app-binput-text',
  templateUrl: './binput-text.component.html',
  styleUrls: ['./binput-text.component.scss']
})
export class BInputTextComponent extends BInput implements OnInit  {

  ngOnInit() {
  }

}
