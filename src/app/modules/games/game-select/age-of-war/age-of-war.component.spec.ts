import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeOfWarComponent } from './age-of-war.component';

describe('AgeOfWarComponent', () => {
  let component: AgeOfWarComponent;
  let fixture: ComponentFixture<AgeOfWarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeOfWarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeOfWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
