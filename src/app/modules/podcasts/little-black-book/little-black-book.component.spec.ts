import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleBlackBookComponent } from './little-black-book.component';

describe('LittleBlackBookComponent', () => {
  let component: LittleBlackBookComponent;
  let fixture: ComponentFixture<LittleBlackBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LittleBlackBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LittleBlackBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
