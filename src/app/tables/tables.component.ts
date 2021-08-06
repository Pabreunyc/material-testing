import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, AfterViewInit {
@ViewChild(MatSort, {static:true}) sort: MatSort;
public ds;
public users:any[] = [];

public displayColumns:string[] = ['name', 'username', 'email','city','dob'];


  constructor(
    private usersService:UsersService,
    private fb:FormBuilder
  ) { }
  
  ngOnInit() {
    console.log('%cTablesComponent', 'background:green;color:white;');
    this._init();    
  }
  ngAfterViewInit(): void {
    console.log('this.ngAfterViewInit', this.sort);        
  }  
// ============================================================================
  onSort(evt) {
    console.log('onSort', evt);
  }

  applyFilter(evt) {
    let key = (evt.target.value || '').trim();
    if(key.length < 3)
      return;
    key = key.toLowerCase();
    console.log('this.applyFilter', key);
    //console.log(this.ds.filterPredicate);
    let search = '';
    this.ds.filteredData = this.ds.data.filter( el => {
      search = ( (el.name.first + el.name.last) || '').trim().toLowerCase();
      return search.includes(key)
    });
    console.log(this.ds.filteredData);    
  }
  af(evt) {
    let key = (evt.target.value || '').trim();
    if(key.length < 3)
      return;
    key = key.toLowerCase();
    this.ds.filter = key;
  }
  clearFilter(evt) {
    this.ds.filter = '';
  }
// ============================================================================
  private _init() {

    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;

        this.ds = new MatTableDataSource(this.users);
        this.ds.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'name': { return item.name.last; break; }
            case 'username': { return item.login.username; break; }
            default: { return item[property]; break; }
          }    
        };
        // https://stackoverflow.com/questions/48470046/angular-material-table-filterpredicate 
        this.ds.filterPredicate =(data, filter: string) => {
          let haystack = (data.name.first + data.name.last).toLowerCase();
          return haystack.includes(filter);
        };        
        this.ds.sort = this.sort;
        
        console.log(this.ds);
      },
      err => {
        console.log('usersService.getUsers.ERR', err);
      }
    );
  }
}
