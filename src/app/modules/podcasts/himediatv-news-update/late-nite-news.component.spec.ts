import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateNiteNewsComponent } from './late-nite-news.component';

describe('LateNiteNewsComponent', () => {
  let component: LateNiteNewsComponent;
  let fixture: ComponentFixture<LateNiteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LateNiteNewsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LateNiteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
