import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-unique',
  templateUrl: './bcell-unique.component.html',
  styleUrls: ['./bcell-unique.component.scss']
})
export class BCellUniqueComponent extends BCell implements OnInit  {

  ngOnInit() {
  }

}
