/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Navigation_barComponent } from './navigation_bar.component';

describe('Navigation_barComponent', () => {
  let component: Navigation_barComponent;
  let fixture: ComponentFixture<Navigation_barComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navigation_barComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navigation_barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
