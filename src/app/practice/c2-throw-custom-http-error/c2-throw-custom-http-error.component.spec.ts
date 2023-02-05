import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C2ThrowCustomHttpErrorComponent } from './c2-throw-custom-http-error.component';

describe('C2ThrowCustomHttpErrorComponent', () => {
  let component: C2ThrowCustomHttpErrorComponent;
  let fixture: ComponentFixture<C2ThrowCustomHttpErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C2ThrowCustomHttpErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C2ThrowCustomHttpErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
