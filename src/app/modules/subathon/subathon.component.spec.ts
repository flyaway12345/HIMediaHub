import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubathonComponent } from './subathon.component';

describe('SubathonComponent', () => {
  let component: SubathonComponent;
  let fixture: ComponentFixture<SubathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubathonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
