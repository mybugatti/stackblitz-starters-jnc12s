import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    MatIconModule
  ]
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() hasActionColumn: boolean = false;
  @Input() actionButtons: { label: string, icon: string }[] = [];

  dataSource = new MatTableDataSource<any>([]);

  @Input() set dataSources(data: any[]) {
    this.setTableDataSource(data);
  }

  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.addColunaAction();
  }

  setTableDataSource(data: any) {
    this.dataSource = new MatTableDataSource<any>(data);
    //this.tableDataSource.paginator = this.matPaginator;
    //this.tableDataSource.sort = this.matSort;
  }

  addColunaAction(){
    this.displayedColumns = this.displayedColumns.map(col => col);
     if (this.hasActionColumn) {
       this.displayedColumns.push('actions');
     }
  }

  onButtonClick(button: any, element: any) {
    this.buttonClick.emit({ button, element });
  }
  
}