import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C8ProvidersComponent } from './c8-providers.component';

describe('C8ProvidersComponent', () => {
  let component: C8ProvidersComponent;
  let fixture: ComponentFixture<C8ProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C8ProvidersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C8ProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
