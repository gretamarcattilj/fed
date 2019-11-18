import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: string[];
  constructor() {
    this.groups = ["red", "blue", "green", "yellow"];
  }

  ngOnInit() {
  }

}
