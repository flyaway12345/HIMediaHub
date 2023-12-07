import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ICSUUYTMTComponent } from './icsuuytmt.component';

describe('ICSUUYTMTComponent', () => {
  let component: ICSUUYTMTComponent;
  let fixture: ComponentFixture<ICSUUYTMTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ICSUUYTMTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ICSUUYTMTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
