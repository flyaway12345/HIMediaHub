import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimediatvNewsUpdateComponent } from './himediatv-news-update.component';

describe('HimediatvNewsUpdateComponent', () => {
  let component: HimediatvNewsUpdateComponent;
  let fixture: ComponentFixture<HimediatvNewsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HimediatvNewsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimediatvNewsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
