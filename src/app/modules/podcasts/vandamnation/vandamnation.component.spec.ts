import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VandamnationComponent } from './vandamnation.component';

describe('VandamnationComponent', () => {
  let component: VandamnationComponent;
  let fixture: ComponentFixture<VandamnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VandamnationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VandamnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
