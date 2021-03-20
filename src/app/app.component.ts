import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-testing';

  foo(n) {
    console.log(n);
    for(let i=0; i<100; i++) {
      console.log('...', n);
      for(let j=0;j<i; j++) {
        console.log(';;;', j);
      }
    }
  }
}
