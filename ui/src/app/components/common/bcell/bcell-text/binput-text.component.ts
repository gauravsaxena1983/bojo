import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-text',
  templateUrl: './bcell-text.component.html',
  styleUrls: ['./bcell-text.component.scss']
})
export class BCellTextComponent extends BCell implements OnInit  {

  ngOnInit() {
  }

}
