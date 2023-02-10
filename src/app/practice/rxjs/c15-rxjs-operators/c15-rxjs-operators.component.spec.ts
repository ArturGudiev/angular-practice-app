import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C15RxjsOperatorsComponent } from './c15-rxjs-operators.component';

describe('C15RxjsOperatorsComponent', () => {
  let component: C15RxjsOperatorsComponent;
  let fixture: ComponentFixture<C15RxjsOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C15RxjsOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C15RxjsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
