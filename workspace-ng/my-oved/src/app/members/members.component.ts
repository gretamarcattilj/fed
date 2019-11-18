import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: string[];
  constructor() { }

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
