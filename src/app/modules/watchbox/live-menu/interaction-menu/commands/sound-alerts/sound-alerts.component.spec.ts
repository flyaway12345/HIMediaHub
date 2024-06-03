import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundAlertsComponent } from './sound-alerts.component';

describe('SoundAlertsComponent', () => {
  let component: SoundAlertsComponent;
  let fixture: ComponentFixture<SoundAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundAlertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
