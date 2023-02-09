import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11PromisesComponent } from './c11-promises.component';

describe('C11PromisesComponent', () => {
  let component: C11PromisesComponent;
  let fixture: ComponentFixture<C11PromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11PromisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C11PromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
