import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bloonstd4Component } from './bloonstd4.component';

describe('Bloonstd4Component', () => {
  let component: Bloonstd4Component;
  let fixture: ComponentFixture<Bloonstd4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bloonstd4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bloonstd4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
