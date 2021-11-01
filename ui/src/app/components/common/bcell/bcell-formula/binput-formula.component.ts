import { Component, OnInit, Input } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-formula',
  templateUrl: './bcell-formula.component.html',
  styleUrls: ['./bcell-formula.component.scss']
})
export class BCellFormulaComponent extends BCell implements OnInit  {

  ngOnInit() {
  }
}
