import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychedelicSpaceCadetComponent } from './psychedelic-space-cadet.component';

describe('PsychedelicSpaceCadetComponent', () => {
  let component: PsychedelicSpaceCadetComponent;
  let fixture: ComponentFixture<PsychedelicSpaceCadetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsychedelicSpaceCadetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PsychedelicSpaceCadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
