import { Component, OnInit } from '@angular/core';
import { User } from "../user.model"
import { EventEmitter } from 'events';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<User>;
  constructor() {
    this.users = [new User("Alberto", "red"), new User("Greta", "red"), new User("Maurizio", "red"), new User("Aurora", "blue"), new User("Luca", "blue"), new User("Marianna", "blue"), new User("Marco Canepa", "green"), new User("Nadia", "green"), new User("Yun", "green"), new User("Nigel", "green"), new User("Marco Raschillà", "yellow"), new User("Jacopo", "yellow"), new User("Roberta", "yellow")];
  }

  ngOnInit() {
  }

  changeColor(name: HTMLInputElement): boolean {
    let aux: Array<User> = this.users;
    for (let i = 0; i < aux.length; i++) {
      if (aux[i]["name"] == name.value) {
        document.bgColor = aux[i]["group"];
      }
    }
    return false;
  }
}
