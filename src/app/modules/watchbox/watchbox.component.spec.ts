import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchboxComponent } from './watchbox.component';

describe('WatchboxComponent', () => {
  let component: WatchboxComponent;
  let fixture: ComponentFixture<WatchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
