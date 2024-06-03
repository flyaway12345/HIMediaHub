import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDesktopComponent } from './live-desktop.component';

describe('LiveDesktopComponent', () => {
  let component: LiveDesktopComponent;
  let fixture: ComponentFixture<LiveDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
