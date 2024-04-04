import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HISoapboxComponent } from './hisoapbox.component';

describe('HISoapboxComponent', () => {
  let component: HISoapboxComponent;
  let fixture: ComponentFixture<HISoapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HISoapboxComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HISoapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
