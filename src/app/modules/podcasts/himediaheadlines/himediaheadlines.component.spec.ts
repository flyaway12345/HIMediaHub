import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIMediaHeadlinesComponent } from './himediaheadlines.component';

describe('HIMediaHeadlinesComponent', () => {
  let component: HIMediaHeadlinesComponent;
  let fixture: ComponentFixture<HIMediaHeadlinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HIMediaHeadlinesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HIMediaHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
