import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionMenuComponent } from './interaction-menu.component';

describe('InteractionMenuComponent', () => {
  let component: InteractionMenuComponent;
  let fixture: ComponentFixture<InteractionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractionMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InteractionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
