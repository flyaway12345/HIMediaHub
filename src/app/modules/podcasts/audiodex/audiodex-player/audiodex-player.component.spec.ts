import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodexPlayerComponent } from './audiodex-player.component';

describe('AudiodexPlayerComponent', () => {
  let component: AudiodexPlayerComponent;
  let fixture: ComponentFixture<AudiodexPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AudiodexPlayerComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(AudiodexPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
