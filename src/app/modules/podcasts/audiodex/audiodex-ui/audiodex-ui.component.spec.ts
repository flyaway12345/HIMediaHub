import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodexUiComponent } from './audiodex-ui.component';

describe('AudiodexUiComponent', () => {
  let component: AudiodexUiComponent;
  let fixture: ComponentFixture<AudiodexUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudiodexUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiodexUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
