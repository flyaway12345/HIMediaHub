import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerksComponent } from './perks.component';

describe('PerksComponent', () => {
  let component: PerksComponent;
  let fixture: ComponentFixture<PerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
