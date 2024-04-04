import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallofshameComponent } from './hallofshame.component';

describe('HallofshameComponent', () => {
  let component: HallofshameComponent;
  let fixture: ComponentFixture<HallofshameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HallofshameComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HallofshameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
