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
    document.bgColor=oved;
    if (oved == "red") {
      this.members = ["Alberto Rampin", "Greta Marcattilj", "Maurizio Fusetti"];
    } else if (oved == "blue") {
      this.members = ["Aurora Perucci", "Luca Naggi", "Marianna Viola"];
    } else if (oved == "green") {
      this.members = ["Yun Uhu", "Marco Canepa", "Nadia Poli", "Nigel Losi"];
    } else {
      this.members = ["Jacopo Martinez", "Marco Raschillà", "Roberta Cramarossa"];
    }
  }

}