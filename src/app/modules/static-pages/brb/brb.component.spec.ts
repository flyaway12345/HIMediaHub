import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrbComponent } from './brb.component';

describe('BrbComponent', () => {
  let component: BrbComponent;
  let fixture: ComponentFixture<BrbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
