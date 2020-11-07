import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-number',
  templateUrl: './bcell-number.component.html',
  styleUrls: ['./bcell-number.component.scss']
})
export class BCellNumberComponent extends BCell implements OnInit {

  ngOnInit() {
  }

}
