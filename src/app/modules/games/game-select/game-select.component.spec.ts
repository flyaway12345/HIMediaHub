import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectComponent } from './game-select.component';

describe('GameSelectComponent', () => {
  let component: GameSelectComponent;
  let fixture: ComponentFixture<GameSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [GameSelectComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(GameSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
