import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLiftComponent } from './new-lift.component';

describe('NewLiftComponent', () => {
  let component: NewLiftComponent;
  let fixture: ComponentFixture<NewLiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
