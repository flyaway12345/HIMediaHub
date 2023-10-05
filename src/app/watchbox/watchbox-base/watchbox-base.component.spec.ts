import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchboxBaseComponent } from './watchbox-base.component';

describe('WatchboxBaseComponent', () => {
  let component: WatchboxBaseComponent;
  let fixture: ComponentFixture<WatchboxBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchboxBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchboxBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
