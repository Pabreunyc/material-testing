import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  scrWidth: Number = 0;
  scrHeight: Number = 0;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    const { innerWidth, innerHeight } = window;
    console.log(`${innerWidth} x ${innerHeight}`);
    console.log(event);
    this.scrWidth = innerWidth; this.scrHeight = innerHeight;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(`Breakpoints: ${Breakpoints}`);
  }

}
