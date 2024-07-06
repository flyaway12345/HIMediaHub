import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCalenderComponent } from './stream-calender.component';

describe('StreamCalenderComponent', () => {
  let component: StreamCalenderComponent;
  let fixture: ComponentFixture<StreamCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamCalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
