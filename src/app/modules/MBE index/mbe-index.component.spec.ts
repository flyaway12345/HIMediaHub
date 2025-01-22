import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MbeIndexComponent } from './mbe-index.component';

describe('EggIndexComponent', () => {
  let component: MbeIndexComponent;
  let fixture: ComponentFixture<MbeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MbeIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MbeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
