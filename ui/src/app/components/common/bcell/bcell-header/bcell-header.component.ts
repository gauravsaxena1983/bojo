import { Component, OnInit } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-header',
  templateUrl: './bcell-header.component.html',
  styleUrls: ['./bcell-header.component.scss']
})
export class BCellHeaderComponent extends BCell implements OnInit {

  ngOnInit() {
  }

}
