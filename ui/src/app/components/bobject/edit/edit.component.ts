import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BObjectDataService } from 'src/app/service/bobject-data.service';
import { BObjectMetaService } from 'src/app/service/bobject-meta.service';
import { BObjectMeta, BObjectField } from 'src/app/common/bobject-meta';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit  {

  bObjectMeta: BObjectMeta;
  bObjectFields: BObjectField[];
  fieldDataMap: any = {};
  data: any = {};

  constructor(
    private bObjectDataService: BObjectDataService,
    private bObjectMetaService: BObjectMetaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('BObjectName: ' + params.get('name'));
      this.getBObjectColumns(params.get('name'), parseInt(params.get('id'), 10) );
    });
  }

  private getBObjectColumns(bObjectName: string, id: number) {
    this.bObjectMetaService.meta(bObjectName).subscribe((meta) => {
      console.log(meta);
      meta.fields.forEach((x) => {
        this.fieldDataMap[x.name] = null;
      });
      this.bObjectMeta = meta;
      this.bObjectFields = meta.fields;
      this.bObjectDataService.id(bObjectName, id).subscribe((data) => {
        this.data = data;
      });
    });
  }

}
