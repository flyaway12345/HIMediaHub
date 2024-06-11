import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrovoComponent } from './trovo.component';

describe('TrovoComponent', () => {
  let component: TrovoComponent;
  let fixture: ComponentFixture<TrovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrovoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
