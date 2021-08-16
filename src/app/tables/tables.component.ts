import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
@ViewChild('searchRef', {static:false}) searchRefVC:ElementRef<HTMLInputElement>;

public ds;
public users:any[] = [];

public displayColumns:string[] = ['name', 'username', 'email','city','dob','status'];
public tableFilters = {
  status: {
    values: ['new','current','retired'],
    current: '',
  },
  gender: {
    values: ['male','female'],
    current: '',
  }
}

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
    console.log('this.ngAfterViewInit', this.searchRefVC);
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
    if(key.length < 2)
      return;
    key = key.toLowerCase();
    this.ds.filter = key;
  }
  clearFilter(evt) {
    this.ds.filter = '';
    this.searchRefVC.nativeElement.value = '';
  }

  onSelectionChange(name, evt) {
    let filter = (evt.value || '').trim().toLowerCase();    
    if( filter && this.tableFilters.hasOwnProperty(name) ) {
      this.tableFilters[name].current = evt.value;
      console.table(this.tableFilters);
      console.log(`key: "${this.searchRefVC.nativeElement.value}"`);

      //this.ds.filter = this.searchRefVC.nativeElement.value;
      this.ds.filter = 'e';
    }
  }
// ============================================================================
  private _init() {

    this.usersService.getUsers().subscribe(
      res => {
        let s = new Set();
        res = (res as any).map(e => {
          let v = this.tableFilters.status.values;
          let status = v[this.getRandomInt(0, v.length)];

          s.add(e.gender);
          return { ...e, 'status':status };
        });          
        this.users = res;
        console.log('gender', s);
        this.ds = new MatTableDataSource(this.users);
        this.ds.sortingDataAccessor = (item, property) => {
          switch(property) {
            case 'name': { return item.name.last; break; }
            case 'username': { return item.login.username; break; }
            default: { return item[property]; break; }
          }    
        };
        this.ds.sort = this.sort;

        // https://stackoverflow.com/questions/48470046/angular-material-table-filterpredicate 
        this.ds.filterPredicate =(data, filter: string) => {
          let haystack = (data.name.first + data.name.last).toLowerCase();
          let found:boolean = true;
          //console.log(filter);

          for(let f in this.tableFilters) {
            if(this.tableFilters[f].current) {
              found = (data[f] == this.tableFilters[f].current) && found;
            }
          }
          //if(found) console.log({found}, data.name.full, `"${filter}"`);

          if(filter === '')
            return found;
          else
            return found && haystack.includes(filter);
        };        
                
        console.log(this.ds);
      },
      err => {
        console.log('usersService.getUsers.ERR', err);
      }
    );
  }

  private getRandomInt(min, max) {
    // The maximum is inclusive and the minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min )) + min;
  }
}
