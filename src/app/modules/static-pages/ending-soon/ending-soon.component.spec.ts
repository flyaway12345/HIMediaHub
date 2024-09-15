import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingSoonComponent } from './ending-soon.component';

describe('EndingSoonComponent', () => {
  let component: EndingSoonComponent;
  let fixture: ComponentFixture<EndingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndingSoonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
