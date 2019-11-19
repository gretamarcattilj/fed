import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Output() liked: EventEmitter<User>;

  constructor() { 
    this.liked = new EventEmitter(); 
  }

  ngOnInit() { 

  }

  plusOne() {
    this.user.likes += 1;
    this.liked.emit(this.user);
  }
  
}