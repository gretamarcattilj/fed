import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-animal-rform',
  templateUrl: './animal-rform.component.html',
  styleUrls: ['./animal-rform.component.css']
})
export class AnimalRFormComponent implements OnInit {
  fAnimal: FormGroup;

  constructor(fa: FormBuilder) {
    this.fAnimal = fa.group(new Animal('Zampa', 5));
  }

  submit(animal: Animal) {
    console.log(animal);
  }

  ngOnInit() { }
}