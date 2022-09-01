import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodexComponent } from './audiodex.component';

describe('AudiodexComponent', () => {
  let component: AudiodexComponent;
  let fixture: ComponentFixture<AudiodexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiodexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
