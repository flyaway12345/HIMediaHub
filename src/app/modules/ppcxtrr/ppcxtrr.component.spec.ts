import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPCxTRRComponent } from './ppcxtrr.component';

describe('PPCxTRRComponent', () => {
  let component: PPCxTRRComponent;
  let fixture: ComponentFixture<PPCxTRRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PPCxTRRComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PPCxTRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
