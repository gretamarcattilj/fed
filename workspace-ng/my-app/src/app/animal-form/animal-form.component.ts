import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  @Output() cons = new EventEmitter<Animal>();
  friend: Animal;

  constructor() {
    this.friend = new Animal('Joshua', 5);
  }

  submit() {
    this.cons.emit(this.friend);
  }

  ngOnInit() {
  }

}
