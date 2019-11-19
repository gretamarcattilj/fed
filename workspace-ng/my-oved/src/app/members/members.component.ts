import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
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