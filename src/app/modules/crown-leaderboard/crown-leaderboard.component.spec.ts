import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrownLeaderboardComponent } from './crown-leaderboard.component';

describe('CrownLeaderboardComponent', () => {
  let component: CrownLeaderboardComponent;
  let fixture: ComponentFixture<CrownLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrownLeaderboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrownLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
