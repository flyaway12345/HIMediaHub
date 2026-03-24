import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpTipVotes } from './vp-tip-votes';

describe('VpTipVotes', () => {
  let component: VpTipVotes;
  let fixture: ComponentFixture<VpTipVotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VpTipVotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VpTipVotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
