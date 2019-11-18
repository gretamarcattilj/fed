import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: string[];
  members: string[];
  constructor() {
    this.groups = ["red", "blue", "green", "yellow"];
  }

  ngOnInit() {
  }
  onChange(id: HTMLSelectElement) {
    let oved: string = id.value;
    if (oved == "red") {
      this.members = ["alberto", "greta", "maurizio"];
    } else if (oved == "blue") {
      this.members = ["aurora", "luca", "marianna"];
    } else if (oved == "green") {
      this.members = ["yun", "marco", "nadia", "nigel"];
    } else {
      this.members = ["jacopo", "marco", "roberta"];
    }
  }

}
