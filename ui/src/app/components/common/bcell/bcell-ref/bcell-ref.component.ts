import { Component, OnInit, Input } from '@angular/core';
import { BCell } from 'src/app/common/bcell';

@Component({
  selector: 'app-bcell-ref',
  templateUrl: './bcell-ref.component.html',
  styleUrls: ['./bcell-ref.component.scss']
})
export class BCellRefComponent extends BCell implements OnInit {

  ngOnInit() {
  }

  @Input() display: any;

}
