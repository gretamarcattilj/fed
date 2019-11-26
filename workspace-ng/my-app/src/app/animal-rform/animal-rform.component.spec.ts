import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalRFormComponent } from './animal-rform.component';

describe('AnimalRFormComponent', () => {
  let component: AnimalRFormComponent;
  let fixture: ComponentFixture<AnimalRFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalRFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
