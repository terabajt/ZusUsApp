import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
@Input()
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
