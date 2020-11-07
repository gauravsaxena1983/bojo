import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-option',
  templateUrl: './bcell-option.component.html',
  styleUrls: ['./bcell-option.component.scss']
})
export class BCellOptionComponent extends BCell implements OnInit {

  ngOnInit() {
  }

}
