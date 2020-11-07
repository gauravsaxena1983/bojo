import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-date',
  templateUrl: './bcell-date.component.html',
  styleUrls: ['./bcell-date.component.scss']
})
export class BCellDateComponent extends BCell implements OnInit {

  ngOnInit() {
  }

}
