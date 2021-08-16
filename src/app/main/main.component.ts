import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../_models/user';
import { UsersService } from '../_services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

public users = null;
public displayedColumns = ['name', 'city', 'email','dob'];

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    console.log('%cMainComponent.init', 'background-color:black;color:lightgreen');
    this.usersService.getUsers().subscribe( 
      res => {
        console.log('res', res);
        this.users = new MatTableDataSource(res);
        this.users.paginator = this.paginator;
      },
      err => console.log('MainComponent.getUsers.Err', err),
      () => console.log('MainComponent.getUsers.COMPLETE')
      );
  }
  ngOnDestroy() {
    console.log('%cMainComponent.destroy', 'background-color:red;color:black');
    this.users = null;
  }
  ngAfterViewInit() {
    console.log('%cMainComponent.afterViewInit', 'background-color:green;color:white');
    console.log(this.paginator);    
  }

  // -------------------------------------------------------------------------

}
