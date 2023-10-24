import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWinstonCupComponent } from './the-winston-cup.component';

describe('TheWinstonCupComponent', () => {
  let component: TheWinstonCupComponent;
  let fixture: ComponentFixture<TheWinstonCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWinstonCupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWinstonCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
