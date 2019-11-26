import { Component } from '@angular/core';
import { User } from './user.model';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';

  addUser(user: User) {
    console.log(user);
  }

  addAnimal(animal: Animal) {
    console.log(animal);
  }
}
