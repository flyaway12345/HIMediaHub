import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamAvatarComponent } from './stream-avatar.component';

describe('StreamAvatarComponent', () => {
  let component: StreamAvatarComponent;
  let fixture: ComponentFixture<StreamAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamAvatarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
