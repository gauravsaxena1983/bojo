import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-select',
  templateUrl: './bcell-select.component.html',
  styleUrls: ['./bcell-select.component.scss']
})
export class BCellSelectComponent extends BCell implements OnInit  {

  ngOnInit() {
  }

}
