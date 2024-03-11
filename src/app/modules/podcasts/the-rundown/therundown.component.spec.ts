import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheRundownComponent } from './therundown.component';

describe('TheRundownComponent', () => {
  let component: TheRundownComponent;
  let fixture: ComponentFixture<TheRundownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheRundownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheRundownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
