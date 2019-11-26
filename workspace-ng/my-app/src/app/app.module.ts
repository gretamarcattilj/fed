import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddItemComponent } from './add-item/add-item.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { UserRFormComponent } from './user-rform/user-rform.component';
import { AnimalRFormComponent } from './animal-rform/animal-rform.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserComponent,
    UsersComponent,
    AddItemComponent,
    UserFormComponent,
    AnimalFormComponent,
    UserRFormComponent,
    AnimalRFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
