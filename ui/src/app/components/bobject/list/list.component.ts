import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BObjectDataService } from 'src/app/service/bobject-data.service';
import { BObjectMetaService } from 'src/app/service/bobject-meta.service';
import { BObjectMeta } from 'src/app/common/bobject-meta';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  selectColumnDetails = {
    name : 'select',
    text : '',
    type : 'select'
  };
  columnNameTextMap: any = {};
  columnNameTypeMap: any = {};
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  bobjectMeta: BObjectMeta;
  text: string;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private bObjectDataService: BObjectDataService,
    private bObjectMetaService: BObjectMetaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log('BObjectName: ' + params.get('name'));
      this.getBObjectColumns(params.get('name'));
    });
  }

  ngAfterViewInit() {

  }

  private getBObjectColumns(bObjectName: string) {
    this.bObjectMetaService.meta(bObjectName).subscribe((meta) => {
      this.bobjectMeta = meta;
      this.text = meta.text;

      const displayedColumns = [];

      this.columnNameTextMap[this.selectColumnDetails.name] = this.selectColumnDetails.text;
      this.columnNameTypeMap[this.selectColumnDetails.name] = this.selectColumnDetails.type;
      displayedColumns.push(this.selectColumnDetails.name);

      meta.fields.forEach((x) => {
        this.columnNameTextMap[x.name] = x.text;
      });

      meta.fields.forEach((x) => {
        this.columnNameTypeMap[x.name] = x.type;
      });

      this.displayedColumns = displayedColumns.concat( meta.fields.map((x) => x.name));

      console.log('displayedColumns: ');

      console.log(this.displayedColumns);

      this.getBObjectList(bObjectName);
    });
  }

  private getBObjectList(bObjectName: string) {
    this.bObjectDataService.list(bObjectName).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.list);
      this.dataSource.paginator = this.paginator;
      console.log(data);
    });
  }
}
