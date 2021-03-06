import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = 'Curriculum Vitae';

  ngOnInit() {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
