import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-starter';
  version = 'Angular version 10.0.6';
  ngOnInit() {
    console.log('single', window.screen.width);
    sessionStorage.setItem('DDD', 'DDDDDDDD');
  }
}
