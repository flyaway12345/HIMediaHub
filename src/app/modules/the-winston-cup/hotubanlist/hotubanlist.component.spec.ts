import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotubanlistComponent } from './hotubanlist.component';

describe('HotubanlistComponent', () => {
  let component: HotubanlistComponent;
  let fixture: ComponentFixture<HotubanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotubanlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotubanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
