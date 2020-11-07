import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-bool',
  templateUrl: './bcell-bool.component.html',
  styleUrls: ['./bcell-bool.component.scss']
})
export class BCellBoolComponent extends BCell implements OnInit {

  ngOnInit() {
  }

}
