import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggIndexComponent } from './egg-index.component';

describe('EggIndexComponent', () => {
  let component: EggIndexComponent;
  let fixture: ComponentFixture<EggIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EggIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EggIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
