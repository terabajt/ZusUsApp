import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => this.checkRouterEvent(routerEvent));
  }

  //Spinner
  private checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
      console.log('Start spinner');
    } else if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      setTimeout(() => (this.isLoading = false), 5000);
      console.log('Stop spinner');
    }
  }
}
